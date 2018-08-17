import { User } from '../entity/User';
import { UserForm } from '../form/UserForm';
import BaseFormController from './BaseFormController';

export class UserController extends BaseFormController<User, UserForm> {
  public repo = this.db.getRepository(User);
  public Form = UserForm;
}
