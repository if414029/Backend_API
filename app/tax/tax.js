const models = require('../../config/models')
const generatedId = require('../../lib/idGenerator')

const { Tax, TaxCode, TaxDetail, sequelize } = models


module.exports = {
    get: async (taxObj) => {
        try {
            return { code: 200, data: generatedId}
        } catch(e) {
            return { code:500, data: e.message }
        }
    },
    create: async (taxObj) => {
        try {
            const { tax } = taxObj
            
            let arrResult = []
            for(val of tax) {
                if(!val.name && val.taxCode && val.price){
                    return { code:400, data: "Fields cannot be empty" }
                } 
                const taxCode = await TaxCode.findOne({
                    where: {
                        code: val.taxCode
                    }
                })
                if(!taxCode) {
                    return { code: 400, data: "Tax Code Invalid" }
                }

                const taxDetail = await TaxDetail.create({
                    id: generatedId(),
                    priceTotal: 0,
                    taxTotal: 0,
                    grandTotal: 0,
                    transactionDate: Date.now()
                })

                let tax = 0
                if(taxCode.code == 1){
                    tax = (val.price * 10)/100
                } else if (taxCode.code == 2){
                    tax = ((val.price * 2)/100) + 2
                } else if (taxCode.code == 3){
                    if(val.price>0 && val.price<100){
                        tax = 0
                    } else {
                        tax = (val.price-100)/100
                    }
                }

                const data = {
                    id: generatedId(),
                    name: val.name,
                    price: val.price,
                    amount: val.price + tax,
                    TaxCodeId: taxCode.id,
                    TaxDetailId: taxDetail.id,
                }
                await Tax.create(data)
                arrResult.push(data)
            }
            
            return { code: 200, data: arrResult }
        } catch(e) {
            return { code:500, data: e.message }
        }
    }
}