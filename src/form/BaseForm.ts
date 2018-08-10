import * as Joi from 'joi';
import {Option, some, none} from 'ts-option';
import { plainToClass } from 'class-transformer';

export default abstract class BaseForm<Model> {
  public schema: Joi.Schema;
  public validatedInput?: any;
  public validationError?: Joi.ValidationError;
  public abstract ModelClass: (new () => Model);

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

  protected toModelOpt() {
    const {ModelClass, validatedInput} = this;
    return this.errors().match<Option<Model>>({
      none() { return some(plainToClass(ModelClass, validatedInput as object)); },
      some(e) { return none; },
    });
  }
}
