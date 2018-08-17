import { User } from '../entity/User';
import BaseForm from './BaseForm';

import {userFormSchema} from '@oscar-g/job-board-schema';

class UserForm extends BaseForm<User> {
  public schema = userFormSchema;
  public ModelClass = User;
}

export { userFormSchema, UserForm };
