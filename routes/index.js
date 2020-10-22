const router = require('express').Router();
const auth = require('../middlewares/auth');
const users = require('./users');
const articles = require('./articles');
const { login } = require('../controllers/login');
const { createUser } = require('../controllers/users');
const NotFoundError = require('../errors/not-found-err');
const { validateSignin, validateSignup } = require('../middlewares/celebrateValidation/celebrateValidators');

router.post('/signin', validateSignin, login);
router.post('/signup', validateSignup, createUser);

router.use('/articles', auth, articles);
router.use('/users', auth, users);

router.get('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;
