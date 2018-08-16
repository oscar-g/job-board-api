import { Company } from '../entity/Company';
import BaseForm from './BaseForm';
import {companyFormSchema} from '@oscar-g/job-board-schema'



class CompanyForm extends BaseForm<Company> {
  public schema = companyFormSchema;
  public ModelClass = Company;
}

export { companyFormSchema, CompanyForm};
