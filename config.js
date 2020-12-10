const {
  DB_URL: 'mongodb://localhost:27017/diplomApi',
  PORT: 3000,
  JWT_SECRET = 'JWT_SECRET',
} = process.env;

module.exports = {
  JWT_SECRET, PORT, DB_URL,
};
