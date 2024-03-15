const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
  sequelize.define(
    'TypeClass',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      start_day: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_day: {
        type: DataTypes.DATE,
        allowNull: false
      },
      start_hour: {
        type: DataTypes.STRING,
        allowNull: false
      },
      end_hour: {
        type: DataTypes.STRING,
        allowNull: false
      },
      acount_student: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }
  )
}