const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define(
    'AcountClass',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      acount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      timestamps: false,
    }
  )
}