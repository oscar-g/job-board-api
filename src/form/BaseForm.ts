import * as Joi from 'joi';

export default abstract class BaseForm<O, M> {
  public schema: Joi.Schema;
  public validatedInput?: O;

  protected validatorOptions: Joi.ValidationOptions = {
    allowUnknown: false,
    stripUnknown: false,
  };

  constructor(public input: any) { }

  public validate(): Joi.ValidationResult<O> {
    const result = Joi.validate(this.input, this.schema, this.validatorOptions);

    if (result.value && !result.error) {
      this.validatedInput = result.value;
    }

    return result;
  }

  public abstract toModel(): M;
}
