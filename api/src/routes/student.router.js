const { Router } = require("express");
const {
  getAllStudent,
  postStudent,
  updateStudent,
  getPagAllStudent,
  addTypeClassStudent,
  getStudentSchedule,
  studentNameClass
} = require("../controllers/students.controller");

const studenRouter = Router();

studenRouter.get("/students", getAllStudent);
studenRouter.get("/paginado", getPagAllStudent);
studenRouter.post("/students", postStudent);
studenRouter.put("/students", updateStudent);


//add class

studenRouter.post("/add-student-class", addTypeClassStudent);
studenRouter.get('/student-schedule', getStudentSchedule)
studenRouter.get('/student-class', studentNameClass)

module.exports = studenRouter;
