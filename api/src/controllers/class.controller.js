const { errorUser } = require('../utils/error')
const { TypeClass, NameClass, AcountClass } = require('../db')

const addTypeClass = async (req, res) => {
	const { startDay, endDay, startHour, endHour, NameClassId, AcountClassId } = req.body

	try {
		const existingTypeClassSchedule = await Student.findOne({
			where: {
				start_day: startDay,
				end_day: endDay,
				start_hour: startHour,
				end_hour: endHour
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
					end_hour: endHour
				},
				{ transaction: t }
			);

			await typeClass.addNameClass(NameClassId, { transaction: t });
			await typeClass.addAcountClass(AcountClassId, { transaction: t });

			return student;
		});

		// Obtener el estudiante con sus relaciones
		const newTypeClass = await TypeClass.findByPk(createdTypeClass.id, {
			include: [NameClass, AcountClass],
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
}

const AcountClass = async(req, res) => {
	const { id } = req.body
	try {
		const findClass = await TypeClass.findByPk(id, {
			include: [NameClass, AcountClass]
		})
	} catch (error) {
		errorUser(error, res)
	}
}

module.exports = {
	addTypeClass,
	AcountClass
}