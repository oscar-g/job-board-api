import { getRepository } from 'typeorm';
import BaseForm from '../form/BaseForm';
import { Response, NextFunction } from 'express';

export default abstract class BaseController {
  protected getRepository = getRepository;
}
