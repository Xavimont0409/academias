const { Router } = require("express");
const {
  getAllStudent,
  postStudent,
  updateStudent,
  getPagAllStudent,
  addTypeClassStudent
} = require("../controllers/students.controller");

const studenRouter = Router();

studenRouter.get("/students", getAllStudent);
studenRouter.get("/paginado", getPagAllStudent);
studenRouter.post("/students", postStudent);
studenRouter.put("/students", updateStudent);

//add class

studenRouter.post("/add-student-class", addTypeClassStudent);

module.exports = studenRouter;
