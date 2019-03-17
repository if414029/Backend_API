module.exports = (sequelize, DataTypes) => {
    const TaxDetail = sequelize.define('TaxDetail', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
        transactionDate: DataTypes.DATE,
        priceTotal: DataTypes.DOUBLE,
        taxTotal: DataTypes.DOUBLE,
        grandTotal: DataTypes.DOUBLE
    })

    TaxDetail.associate = (models) => {
        TaxDetail.hasMany(models.Tax)
    }

    return TaxDetail
}