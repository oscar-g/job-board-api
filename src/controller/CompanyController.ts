import { NextFunction, Request, Response } from 'express';
import BaseController from './BaseController';
import { CompanyForm } from '../form/CompanyForm';
import { Company } from '../entity/Company';
import BaseFormController from './BaseFormController';

export class CompanyController extends BaseFormController<Company, CompanyForm> {
  public repo = this.getRepository(Company);
  public Form = CompanyForm;
}
