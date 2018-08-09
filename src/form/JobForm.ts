import { Job } from '../entity/Job';
import * as Joi from 'joi';
import BaseForm from './BaseForm';
import { plainToClass } from 'class-transformer';

const jobFormSchema = Joi.object({
  title: Joi.string().required().max(150),
  description: Joi.string().required(),
  instructions: Joi.string().required().max(500),
  location: Joi.string().required(),
  fulltime: Joi.boolean().required(),
  contract: Joi.boolean().required(),
  reloc: Joi.boolean().required(),
  visa: Joi.boolean().required(),
});

class JobForm extends BaseForm<{
  title: string,
}, Job> {
  public schema = jobFormSchema;

  public toModel() {
    return plainToClass(Job, this.validatedInput);
  }
}

export { jobFormSchema, JobForm };
