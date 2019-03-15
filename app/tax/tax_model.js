module.exports = (sequelize, DataTypes) => {
    const Tax = sequelize.define('Tax', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
        name: DataTypes.STRING,
        price: DataTypes.STRING,
    })

    Tax.associate = (models) => {
        Tax.belongsTo(models.TaxCode, { foreignKey: 'TaxCodeId', unique: true })
    }

    return Tax
}