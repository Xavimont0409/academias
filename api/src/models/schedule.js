const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define(
    'Schedule',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      start_hour: {
        type: DataTypes.STRING,
        allowNull: false
      },
      end_hour: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  )
}