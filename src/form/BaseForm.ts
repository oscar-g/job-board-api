import * as Joi from 'joi';
import {Option, some, none} from 'ts-option';

export default abstract class BaseForm<Model> {
  public schema: Joi.Schema;
  public validatedInput?: any;
  public validationError?: Joi.ValidationError;

  protected validatorOptions: Joi.ValidationOptions = {
    allowUnknown: false,
    stripUnknown: false,
  };

  constructor(public input: any) { }

  public validate(): Option<Model> {
    const result = Joi.validate(this.input, this.schema, this.validatorOptions);

    if (result.error) {
      this.validationError = result.error;
    } else {
      // if (result.value) {
        this.validatedInput = result.value;
      // }
    }

    return this.toModelOpt();
  }

  public errors(): Option<Joi.ValidationError> {
    if (this.validationError) {
      return some(this.validationError);
    } else {
      return none;
    }
  }
  protected abstract toModelOpt(): Option<Model>;
}
