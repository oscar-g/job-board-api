import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import { Connection, Repository } from 'typeorm';

export default abstract class BaseController<Model> {
  public defaultRelations: string[] = [];
  public abstract repo: Repository<Model>;

  constructor(protected db: Connection) {}

  public view(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id || null;

    if (!id) {
      return res.status(400)
    }

    return this.repo.findOne(id, {
      relations: this.defaultRelations,
    }).then((model) => {
      if (!model)  {
        res.status(404);
      }
      return model;
    });
  }
}
