const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define(
    'PaymentDate',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  )
}