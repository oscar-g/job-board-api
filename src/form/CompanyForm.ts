import { object, string } from 'joi';
import { Company } from '../entity/Company';
import BaseForm from './BaseForm';

const companyFormSchema = object({
  name: string().required().max(100).label('Company Name'),
  description: string().required().max(1000).tags('wysiwyg').label('description'),
  tagline: string().optional().max(150).label('Tagline'),
  url: string().uri({
    scheme: ['http', 'https'],
  }).label('Website'),
  // @todo validate + upload logo img
  // logoSrc: string().optional(),
});

class CompanyForm extends BaseForm<Company> {
  public schema = companyFormSchema;
  public ModelClass = Company;
}

export { companyFormSchema, CompanyForm};
