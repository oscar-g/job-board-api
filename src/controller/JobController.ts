import {NextFunction, Request, Response, json} from 'express';
import { Job } from '../entity/Job';
import BaseController from './BaseController';
import {  JobForm } from '../form/JobForm';
import BaseFormController from './BaseFormController';

export class JobController extends BaseFormController<Job, JobForm> {
  public repo = this.getRepository(Job);
  public Form = JobForm;

  public async allLatest(req: Request, res: Response, next: NextFunction) {
    return this.repo.find();
  }
}
