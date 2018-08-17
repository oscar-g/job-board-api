import {NextFunction, Request, Response} from 'express';
import { FindManyOptions } from 'typeorm';
import { Job } from '../entity/Job';
import {  JobForm } from '../form/JobForm';
import BaseFormController from './BaseFormController';

export class JobController extends BaseFormController<Job, JobForm> {
  public repo = this.db.getRepository(Job);
  public Form = JobForm;

  public pageSize = 10;

  public async allLatest(req: Request, res: Response, next: NextFunction) {
    const findOpts: FindManyOptions<Job> = {
      skip: 0,
      take: this.pageSize,
      where: {
        active: true,
      },
      order: {
        created: -1,
        title: 1,
      },
      relations: ['company'],
    };

    return this.repo.count({ active: true })
    .then((count) => {
      // @todo cache this
      const totalPages = Math.ceil(count / this.pageSize);
      let reqPage = Math.ceil(req.query.page) || 1;

      if (reqPage > totalPages) {
        reqPage = totalPages;
      }

      if (reqPage < 1) {
        reqPage = 1;
      }

      findOpts.skip = this.pageSize * (reqPage - 1);

      return this.repo
        .find(findOpts)
        .then((posts) => ({posts, totalPages, reqPage}));
    });
  }
}
