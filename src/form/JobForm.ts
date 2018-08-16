import { Job } from '../entity/Job';
import * as Joi from 'joi';
import BaseForm from './BaseForm';

const jobFormSchema = Joi.object({
  title: Joi.string().required().max(150).label('Job Title'),
  description: Joi.string().required().max(1000).tags('wysiwyg').label('Descrpition'),
  instructions: Joi.string().required().max(500).tags('textarea').label('Application Instructions'),
  location: Joi.string().required().max(200).label('Location'),
  fulltime: Joi.boolean().required().tags('radio').meta({
    label: {
      0: 'Part time',
      1: 'Full time',
    },
  }).label('Job Length'),
  contract: Joi.boolean().required().tags('radio').meta({
    label: {
      0: 'Employment',
      1: 'Contract',
    },
  }).label('Work Type'),
  reloc: Joi.boolean().optional().default(false).tags('cb').label('Relocation Assistance'),
  visa: Joi.boolean().optional().default(false).tags('cb').label('Visa Sponsorship'),
});

class JobForm extends BaseForm<Job> {
  public schema = jobFormSchema;
  public ModelClass = Job;
}

export { jobFormSchema, JobForm };
