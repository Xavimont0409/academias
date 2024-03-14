const { Level } = require('../db')
const errorUser = require("../utils/error");

const getAllLevel = async (req, res) => {
  try {
    const allLevel = await Level.findAll()

    res.status(200).json({
      message: 'ok',
      status: 200,
      level: allLevel
    })
  } catch (error) {
    errorUser(error, res)
  }
}

module.exports = {
  getAllLevel
}