const { Teacher } = require('../db')
const errorUser = require('../utils/error')

const getAllTeacher = async(req, res) => {
  try {
    const allTeacher = await Teacher.findAll()

    res.status(200).json(allTeacher)
  } catch (error) {
    errorUser(error, res)
  }
}

module.exports = {
  getAllTeacher
}