const { Router } = require('express')
const studenRouter = require('./student.router')
const teacherRouter = require('./teacher.router')
const levelRouter = require('./level.router')
const categoryRouter = require('./category.router')

const routes = Router()

routes.use('/', studenRouter)
routes.use('/', teacherRouter)
routes.use('/', levelRouter)
routes.use('/', categoryRouter)

module.exports = routes