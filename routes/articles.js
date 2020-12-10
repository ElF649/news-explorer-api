const articlesRouter = require('express').Router();

const {
  getArticles,
  createArticle,
  deleteArticle,
} = require('../controllers/articles');
const { validateArticle, validateId } = require('../middlewares/celebrateValidation/celebrateValidators');

articlesRouter.get('/', getArticles);
articlesRouter.post('/', validateArticle, createArticle);
articlesRouter.delete('/:articleId', validateId, deleteArticle);

module.exports = articlesRouter;
