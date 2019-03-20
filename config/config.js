require('dotenv').config();
const joi = require('joi')

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow(['development', 'production', 'test', 'staging'])
    .required(),
  PORT: joi.number().default(8080),
  DATABASE: joi.string().default('population_db'),
  TEST_DB: joi.string().default('population_test_db'),
  DATABASE_DIALECT: joi.string().default('postgres'),
  DATABASE_PASSWORD: joi.string().default(null),
  DATABASE_USER: joi.string().default('root'),
  HOST: joi.string().default('localhost'),
  DATABASE_URL: joi.string().default(null),
})
  .unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}


const config = {
  env: envVars.NODE_ENV || 'development',
  port: envVars.PORT,
  databaseName: envVars.DATABASE,
  testDbName: envVars.TEST_DB,
  dbUsername: envVars.DATABASE_USER,
  databaseDialect: envVars.DATABASE_DIALECT,
  dbPassword: envVars.password,
  host: envVars.HOST,
  databaseUrl: envVars.DATABASE_URL
};

module.exports = config;

