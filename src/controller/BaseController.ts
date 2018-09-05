import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import { Connection, Repository } from 'typeorm';

export default abstract class BaseController<Model> {
  public abstract repo: Repository<Model>;

  constructor(protected db: Connection) {}

  public view(req: Request, res: Response, next: NextFunction) {
    const id = req.param('id', null);

    if (!id) {
      return res.status(400)
    }

    return this.repo.findOne(id).then(model => {
      if (model)  {
        return res.status(200).json(model)
      }

      return res.status(404)
    })
  }
}
