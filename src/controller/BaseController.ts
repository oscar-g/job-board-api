import { Connection } from 'typeorm';

export default abstract class BaseController {
  constructor(protected db: Connection) {}
}
