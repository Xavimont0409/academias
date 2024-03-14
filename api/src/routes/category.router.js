const { Router } = require('express')
const { getAllCategory } = require('../controllers/category.controller')

const categoryRouter = Router()

categoryRouter.get('/category', getAllCategory)

module.exports = categoryRouter