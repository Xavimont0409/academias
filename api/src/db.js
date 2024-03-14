require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dialect = "postgres";

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: dialect,
  logging: false,
  native: false,
});

const basename = path.basename(__filename)

const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

modelDefiners.forEach(model => model(sequelize))
const entries = Object.entries(sequelize.models)
const capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])
sequelize.models = Object.fromEntries(capsEntries)

const { Student, Schedule, Status, Category, PaymentDate, Teacher, Level, TypeClass, NameClass, AcountClass } = sequelize.models;

Student.belongsToMany(Schedule, { through: 'StudentSchedule' })
Schedule.belongsToMany(Student, { through: 'StudentSchedule' })

Student.belongsToMany(Category, { through: 'StudentCategory' })
Category.belongsToMany(Student, { through: 'StudentCategory' })

Student.belongsToMany(Level, { through: 'StudentLevel' })
Level.belongsToMany(Student, { through: 'StudentLevel' })

Student.belongsToMany(TypeClass, { through: 'StudenTypeClass' })
TypeClass.belongsToMany(Student, { through: 'StudenTypeClass' })

TypeClass.belongsToMany(NameClass, { through: 'TypeClassName' })
NameClass.belongsToMany(TypeClass, { through: 'TypeClassName' })

TypeClass.belongsToMany(AcountClass, { through: 'ClassAcount' })
AcountClass.belongsToMany(TypeClass, { through: 'ClassAcount' })

module.exports = {
  ...sequelize.models, 
  conn: sequelize
}