const { Router } = require('express')
const { getAllLevel } = require('../controllers/level.controller')

const levelRouter = Router()

levelRouter.get('/level', getAllLevel)

module.exports = levelRouter