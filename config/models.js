const Sequelize = require('sequelize')
const config = require('./config')['development']
const sequelize = new Sequelize(config.database, config.username, config.password, config)

const models = {
  // User: sequelize.import('../app/user/user_model'),
  Tax: sequelize.import('../app/tax/tax_model'),
  TaxCode: sequelize.import('../app/tax/tax_code_model'),
}

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
