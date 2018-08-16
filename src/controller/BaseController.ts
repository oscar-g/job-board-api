import { Connection } from 'typeorm';
import BaseForm from '../form/BaseForm';
import { Response, NextFunction } from 'express';

export default abstract class BaseController {
  constructor(protected db: Connection) {}
}
