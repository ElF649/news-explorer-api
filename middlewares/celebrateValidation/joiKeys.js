const { Joi } = require('celebrate');

const name = Joi
  .string()
  .required()
  .min(2)
  .max(30);

const email = Joi
  .string()
  .email()
  .required();

const password = Joi
  .string()
  .min(6)
  .alphanum()
  .required();

const keyword = Joi
  .string()
  .required();

const title = Joi
  .string()
  .required();

const text = Joi
  .string()
  .required();

const date = Joi
  .string()
  .required();

const source = Joi
  .string()
  .required();

const link = Joi
  .string()
  .required()
  .uri();

const image = Joi
  .string()
  .required()
  .uri();

const articleId = Joi
  .string()
  .alphanum()
  .length(24)
  .hex();

module.exports = {
  name,
  email,
  password,
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
  articleId,
};
