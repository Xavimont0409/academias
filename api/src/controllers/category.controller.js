const { Category } = require('../db')
const errorUser = require("../utils/error");

const getAllCategory = async(req, res) => {
  try {
    const allCategory = await Category.findAll()

    res.status(200).json({
      message: 'ok',
      status: 200,
      category: allCategory
    })
  } catch (error) {
    errorUser(error, res)
  }
}

module.exports = {
  getAllCategory
}