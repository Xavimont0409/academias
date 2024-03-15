const errorUser = require("../utils/error");
const { Op } = require("sequelize");
const { TypeClass, NameClass, conn: sequelize } = require("../db");

const getTypeClass = async (req, res) => {
  try {
    const { startDate, endDate } = req.query; // Obtener las fechas de la consulta

    let whereClause = {}; // Inicializar la cláusula where para la consulta

    // Verificar si se proporcionan fechas y agregarlas a la cláusula where
    if (startDate && endDate) {
      whereClause = {
        start_day: {
          [Op.between]: [startDate, endDate], // Utilizar Op.between para filtrar por rango de fechas
        },
      };
    }

    // Realizar la consulta de las clases con el filtro por fechas
    const allClass = await TypeClass.findAll({
      include: [NameClass],
      where: whereClause, // Aplicar la cláusula where
    });

    res.status(200).json({
      message: "ok",
      status: 200,
      typeClasses: allClass,
    });
  } catch (error) {
    errorUser(error, res);
  }
};

const addTypeClass = async (req, res) => {
  const { startDay, endDay, startHour, endHour, NameClassId, acountStudent } =
    req.body;

  try {
    const existingTypeClassSchedule = await TypeClass.findOne({
      where: {
        start_day: startDay,
        end_day: endDay,
        start_hour: startHour,
        end_hour: endHour,
      },
    });
    if (existingTypeClassSchedule) {
      return res.status(409).json({ message: "El horario ya existe" });
    }

    const createdTypeClass = await sequelize.transaction(async (t) => {
      const typeClass = await TypeClass.create(
        {
          start_day: startDay,
          end_day: endDay,
          start_hour: startHour,
          end_hour: endHour,
          acount_student: acountStudent,
        },
        { transaction: t }
      );

      await typeClass.addNameClass(NameClassId, { transaction: t });

      return typeClass;
    });

    // Obtener el estudiante con sus relaciones
    const newTypeClass = await TypeClass.findByPk(createdTypeClass.id, {
      include: [NameClass],
    });

    res.status(200).json({
      message: "ok",
      status: 200,
      typeClass: newTypeClass,
    });
  } catch (error) {
    console.log(error);
    errorUser(error, res);
  }
};

module.exports = {
  addTypeClass,
  getTypeClass,
};
