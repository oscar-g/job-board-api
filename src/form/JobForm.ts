import { Job } from '../entity/Job';
import * as Joi from 'joi';
import BaseForm from './BaseForm';
import { plainToClass } from 'class-transformer';
import { None, none, some, Option } from 'ts-option';

const jobFormSchema = Joi.object({
  title: Joi.string().required().max(150).label('Job Title'),
  description: Joi.string().required().max(1000).tags('textarea'),
  instructions: Joi.string().required().max(500),
  location: Joi.string().required(),
  fulltime: Joi.boolean().required(),
  contract: Joi.boolean().required(),
  reloc: Joi.boolean().optional().default(false),
  visa: Joi.boolean().optional().default(false),
});

class JobForm extends BaseForm<Job> {
  public schema = jobFormSchema;
  public ModelClass = Job;
}

export { jobFormSchema, JobForm };
