import { object, string } from 'joi';
import { User } from '../entity/User';
import BaseForm from './BaseForm';

const userFormSchema = object({
  email: string().required().email(),
  firstName: string().required().max(100),
  lastName: string().required().max(100),
});

class UserForm extends BaseForm<User> {
  public schema = userFormSchema;
  public ModelClass = User;
}
