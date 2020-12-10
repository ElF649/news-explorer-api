const { celebrate, Joi } = require('celebrate');
const {
  name, email, password, link, keyword, title, text, date, source, image, articleId,
} = require('./joiKeys');

const validateSignup = celebrate({
  body: Joi.object().options({ abortEarly: false }).keys({
    name, email, password,
  }),
});

const validateSignin = celebrate({
  body: Joi.object().options({ abortEarly: false }).keys({ email, password }),

});

const validateArticle = celebrate({
  body: Joi.object().options({ abortEarly: false }).keys({
    keyword, title, text, date, source, link, image,
  }),

});

const validateId = celebrate({
  params: Joi.object().options({ abortEarly: false }).keys({ articleId }),

});

module.exports = {
  validateSignup,
  validateSignin,
  validateArticle,
  validateId,
};
