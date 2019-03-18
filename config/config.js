module.exports = {
    development: {
      username: 'root',
      password: '',
      database: 'test',
      host: 'db',
      dialect: 'mysql',
      pool: {
        idle: 10000,
        min: 20,
        max: 30,
      },
    }
  }
  //db