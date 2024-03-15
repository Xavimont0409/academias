const {
  Student,
  Category,
  Level,
  StudenTypeClass,
  TypeClass,
  NameClass,
  conn: sequelize,
} = require("../db");
const errorUser = require("../utils/error");

const getAllStudent = async (req, res) => {
  try {
    const allStudents = await Student.findAll({ include: [Category, Level] });

    res.status(200).json(allStudents);
  } catch (error) {
    errorUser(error, res);
  }
};

const getPagAllStudent = async (req, res) => {
  try {
    // Parámetros de paginación y filtros
    const { page, size, categoryId, levelId } = req.query;
    /* page = numero de pagina, size= cantidad de datos por pagina */
    const offset = (page - 1) * size;

    // Consulta de estudiantes con paginación y filtros
    const whereConditionCategory = {};
    if (categoryId) whereConditionCategory["id"] = categoryId;

    const whereConditionLevel = {};
    if (levelId) whereConditionLevel["id"] = levelId;

    // Consulta de estudiantes con paginación y filtros
    const { count, rows } = await Student.findAndCountAll({
      include: [
        { model: Category, as: "Categories", where: whereConditionCategory },
        { model: Level, as: "Levels", where: whereConditionLevel },
      ],
      offset,
      limit: size,
    });

    // Calcular el número total de páginas
    const totalPages = Math.ceil(count / size);

    // Enviar respuesta con los datos paginados
    res.status(200).json({
      totalPages,
      currentPage: page,
      totalStudents: count,
      students: rows,
    });
  } catch (error) {
    console.log(error);
    errorUser(error, res);
  }
};

const postStudent = async (req, res) => {
  const {
    name,
    lastName,
    age,
    address,
    phone,
    nameTutor,
    size, //talla pollo
    CategoryId,
    LevelId,
  } = req.body;

  try {
    const existingStudent = await Student.findOne({
      where: { name, last_name: lastName, age },
    });
    if (existingStudent) {
      return res.status(409).json({ message: "El estudiante ya existe." });
    }

    const createdStudent = await sequelize.transaction(async (t) => {
      const student = await Student.create(
        {
          name,
          last_name: lastName,
          age,
          address,
          name_tutor: nameTutor,
          phone,
          size,
        },
        { transaction: t }
      );

      await student.addCategory(CategoryId, { transaction: t });
      await student.addLevel(LevelId, { transaction: t });

      return student;
    });

    // Obtener el estudiante con sus relaciones
    const newStudent = await Student.findByPk(createdStudent.id, {
      include: [Category, Level],
    });

    res.status(200).json({
      message: "ok",
      status: 200,
      student: newStudent,
    });
  } catch (error) {
    console.log(error);
    errorUser(error, res);
  }
};

const updateStudent = async (req, res) => {
  const {
    id, // ID del estudiante a actualizar
    name,
    lastName,
    age,
    address,
    phone,
    nameTutor,
    size, // Talla pollo
    CategoryId,
    LevelId,
  } = req.body;

  try {
    // Buscar el estudiante existente por su ID
    const existingStudent = await Student.findByPk(id);

    // Verificar si el estudiante existe
    if (!existingStudent) {
      return res.status(404).json({ message: "El estudiante no existe." });
    }

    // Actualizar los datos del estudiante
    await sequelize.transaction(async (t) => {
      await existingStudent.update(
        {
          name,
          last_name: lastName,
          age,
          address,
          name_tutor: nameTutor,
          phone,
          size,
        },
        { transaction: t }
      );

      // Actualizar las relaciones del estudiante con la categoría y el nivel
      await existingStudent.setCategories([CategoryId], { transaction: t });
      await existingStudent.setLevels([LevelId], { transaction: t });
    });

    // Obtener el estudiante actualizado con sus relaciones
    const updatedStudent = await Student.findByPk(id, {
      include: [Category, Level],
    });

    res.status(200).json({
      message: "Estudiante actualizado exitosamente.",
      status: 200,
      student: updatedStudent,
    });
  } catch (error) {
    console.error(error);
    errorUser(error, res);
  }
};

const addTypeClassStudent = async (req, res) => {
  const { StudentId, TypeClassId } = req.body;
  try {
    // Buscar la clase por su ID
    const typeClass = await TypeClass.findByPk(TypeClassId, {
      include: [NameClass],
    });

    if (!typeClass) {
      return res.status(404).json({ message: "Clase no encontrada", status: 404 });
    }

    // Verificar el tipo de clase y la capacidad
    if (typeClass.NameClasses[0].name === "INDIVIDUAL") {
      if (typeClass.acount_student === 0) {
        typeClass.acount_student = 1;
      } else {
        return res.status(400).json({ message: "La clase individual ya está llena", status: 400 });
      }
    } else if (typeClass.NameClasses[0].name === "GRUPAL") {
      if (typeClass.acount_student < 15) {
        typeClass.acount_student++;
      } else {
        return res.status(400).json({ message: "La clase grupal está llena", status: 400 });
      }
    } else {
      return res.status(400).json({ message: "Tipo de clase no válido", status: 400 });
    }

    // Guardar la clase actualizada
    await typeClass.save();

    // Crear una relación entre el estudiante y la clase
    const typeClassStudent = await StudenTypeClass.create({ StudentId, TypeClassId });

    // Enviar respuesta al cliente
    res.status(200).json({
      message: "Agregado con éxito",
      status: 200,
      typeClassStudent,
      typeClassUpdate: typeClass,
    });
  } catch (error) {
    errorUser(error, res);
  }
};

module.exports = {
  getAllStudent,
  postStudent,
  updateStudent,
  getPagAllStudent,
  addTypeClassStudent,
};
