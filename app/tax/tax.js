const models = require('../../config/models')
const generatedId = require('../../lib/idGenerator')

const { Tax, TaxCode, sequelize } = models


module.exports = {
    get: async (taxObj) => {
        try {

        } catch(e) {
            return { code:500, data: e.message }
        }
    },
    create: async (taxObj) => {
        try {
            const { name, taxCodeId, price } = taxObj
            const taxCode = await TaxCode.findById(taxCodeId)
            if(!taxCode) {
                return { code: 400, data: "Tax Code Id Invalid" }
            }

            
        } catch(e) {
            return { code:500, data: e.message }
        }
    }
}