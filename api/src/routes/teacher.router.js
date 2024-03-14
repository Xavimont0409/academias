const { Router } = require('express')
const { getAllTeacher } =  require('../controllers/teacher.controller')

const teacherRouter = Router()

teacherRouter.get('/teacher', getAllTeacher)

module.exports = teacherRouter