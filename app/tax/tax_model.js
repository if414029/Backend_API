module.exports = (sequelize, DataTypes) => {
    const Tax = sequelize.define('Tax', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
        name: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        amount: DataTypes.DOUBLE
    })

    Tax.associate = (models) => {
        Tax.belongsTo(models.TaxCode, { foreignKey: 'TaxCodeId', unique: true })
        Tax.belongsTo(models.TaxDetail, { foreignKey: 'TaxDetailId', unique: true })
    }

    return Tax
}