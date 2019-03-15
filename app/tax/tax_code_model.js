module.exports = (sequelize, DataTypes) => {
    const TaxCode = sequelize.define('TaxCode', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
        code: DataTypes.INTEGER,
        type: DataTypes.STRING,
        refunable: DataTypes.STRING,
    })

    TaxCode.associate = (models) => {
        TaxCode.hasMany(models.Tax)
    }

    return TaxCode
}