import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  SECRET_KEY: string;
}

const envsSchema = joi
  .object<EnvVars>({
    PORT: joi.number().required(),
    SECRET_KEY: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`CConfig validation error: ${error.message}`);
}

const envsVar = value;

export const envs = {
  port: envsVar.PORT,
  secret_key: envsVar.SECRET_KEY,
};
