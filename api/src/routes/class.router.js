const { Router } = require('express')
const { addTypeClass, getTypeClass } = require('../controllers/class.controller')

const classRouter = Router()

classRouter.post('/class', addTypeClass)
classRouter.get('/classes', getTypeClass)

module.exports = classRouter