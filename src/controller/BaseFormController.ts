import BaseController from './BaseController';
import { Repository } from 'typeorm';
import { Request, NextFunction } from 'express-serve-static-core';
import { Response } from 'express';
import BaseForm from '../form/BaseForm';

export default abstract class BaseFormController<Model, Form>  extends BaseController {
  public abstract repo: Repository<Model>;
  public abstract Form: (new (input: any) => BaseForm<Model>);

  public async create(req: Request, res: Response, next: NextFunction) {
    const form = new this.Form(req.body);

    form.validate().fold(() => {
      const e = form.errors();
      if (e.exists) {
        res.json(e.get).status(400);
      } else {
        res.status(500).send('Could not validate input due to an internal error');
      }

      next();
    })((model) => {
      this.repo.save(model as any).then((val) => {
        res.json(val);
        return next();
      }).catch((err) => {
        res.status(500).send('Could not save model due to an inernal error');
      });
    });
  }
}
