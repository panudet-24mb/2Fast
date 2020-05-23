const env = {
  database: '2fast_auth',
  username: 'root',
  password: 'P@ssw0rd2020',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;
