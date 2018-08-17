import { Company } from '../entity/Company';
import { CompanyForm } from '../form/CompanyForm';
import BaseFormController from './BaseFormController';

export class CompanyController extends BaseFormController<Company, CompanyForm> {
  public repo = this.db.getRepository(Company);
  public Form = CompanyForm;
}
