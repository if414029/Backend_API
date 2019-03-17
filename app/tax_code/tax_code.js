const models = require('../../config/models')
const generatedId = require('../../lib/idGenerator')

const { TaxCode } = models


module.exports = {
    create: async (taxObj) => {
        try {
            const data = [
                { 
                    code: 1,
                    type: "Food & Beverage",
                    refundable: "Yes"
                },
                { 
                    code: 2,
                    type: "Tobacco",
                    refundable: "No"
                },
                { 
                    code: 3,
                    type: "Entertainment",
                    refundable: "No"
                }
            ]

            for (val of data) {
                const taxCode = await TaxCode.findOne({
                    where: {
                        code: val.code
                    }
                })
                if(!taxCode){
                    await TaxCode.create({
                        id: generatedId(),
                        code: val.code,
                        type: val.type,
                        refundable: val.refundable                    
                    })
                }
            }
            
        } catch(e) {
            return { code:500, data: e.message }
        }
    }
}