module.exports = {
    development: {
      username: 'root',
      password: 'password',
      database: 'test',
      host: '127.0.0.1',
      dialect: 'mysql',
      pool: {
        idle: 10000,
        min: 20,
        max: 30,
      },
    }
  }
  