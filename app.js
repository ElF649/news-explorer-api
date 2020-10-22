require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { PORT, DB_URL } = require('./config');
const { limiter } = require('./middlewares/expressRateLimit');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const handleServerErrors = require('./middlewares/hadleServerErrors');
const router = require('./routes');

const app = express();

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(helmet());

app.use(limiter);

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(handleServerErrors);

app.listen(PORT);
