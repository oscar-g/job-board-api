import { Connection  } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Company, Job } from './../../../api/src';
import * as faker from 'faker';

const fakeCompanies = (num: number): Company[] => {
  const ids = [];
  const p = [];

  const models = [];

  for (let i = 0; i < num; i++) {
    const m = {
      name: faker.company.companyName(),
      description: faker.lorem.paragraphs(2),
      tagline: faker.company.catchPhrase(),
      url: faker.internet.url(),
    };

    models.push(plainToClass(Company, m as object));
  }

  return models;
};

export const seedFakeData = (con: Connection) => (numCompanies: number, numJobs: number) => {
  const compRepo = con.getRepository(Company);
  const jobRepo = con.getRepository(Job);

  const companies = fakeCompanies(numCompanies);

  const saveComps = companies.map<Promise<number>>((x) => {
    return compRepo.save(x).then((newModel) => {
      return newModel.id;
    });
  });

  Promise.all(saveComps).then((companyIds) => {
    console.log('company ids', companyIds);
    const saveJobs: Array<Promise<number>> = [];

    for (let i = 0; i < numJobs; i++) {
      const model = {
        title: faker.fake('{{name.jobType}} {{name.jobTitle}}'),
        company: companyIds[Math.floor(Math.random() * companyIds.length)],
        // categories: TaxonomyTerm[],
        description: faker.lorem.paragraphs(2),
        instructions: faker.fake('Send resume and cover letter to {{name.findName}} {{internet.email}}'),
        location: faker.fake('{{address.city}}, {{address.state}}'),
        fulltime: !!(Math.round(Math.random())),
        contract: !!(Math.round(Math.random())),
        reloc: !!(Math.round(Math.random())),
        visa: !!(Math.round(Math.random())),
      };

      saveJobs.push(
        jobRepo.save(plainToClass(Job, model as object)).then((_) => _.id),
      );

      Promise.all(saveJobs).then((jobIds) => {
        console.log('job ids', jobIds);
      });
    }
  });
};
