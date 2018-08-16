import { object, string } from 'joi';
import { User } from '../entity/User';
import BaseForm from './BaseForm';

const userFormSchema = object({
  email: string().required().email().label('Email Address'),
  firstName: string().required().max(100).label('First Name'),
  lastName: string().required().max(100).label('Last Name'),
});

class UserForm extends BaseForm<User> {
  public schema = userFormSchema;
  public ModelClass = User;
}

export { userFormSchema, UserForm };
