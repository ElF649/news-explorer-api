const Article = require('../models/article.js');
const NotFoundError = require('../errors/not-found-err');
const IncorrectData = require('../errors/incorrect-data');

const getArticles = (req, res, next) => Article.find({ owner: req.user._id })
  .populate('user')
  .then((articles) => res.status(200).send({ articles }))
  .catch(next);

const createArticle = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;
  const owner = req.user._id;
  Article.create({
    keyword, title, text, date, source, link, image, owner,
  })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new IncorrectData('Переданы некорректные данные');
      }
    })
    .then((article) => res.status(201).send({ data: article }))
    .catch(next);
};

const deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId).select('+owner')
    .orFail(new NotFoundError('Нет статьи с таким id'))
    .then((article) => {
      if (article.owner.toString() === req.user._id) {
        Article.findByIdAndRemove(req.params.articleId)
          .then(() => { res.send({ message: 'Статья удалена' }); })
          .catch(next);
      } else {
        res.send({ message: 'Вы не можете удалить чужую статью' });
      }
    })
    .catch(next);
};

module.exports = { getArticles, createArticle, deleteArticle };
