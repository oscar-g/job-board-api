import { Job } from '../entity/Job';
import BaseForm from './BaseForm';

import {jobFormSchema} from '@oscar-g/job-board-schema';

class JobForm extends BaseForm<Job> {
  public schema = jobFormSchema;
  public ModelClass = Job;
}

export { jobFormSchema, JobForm };
