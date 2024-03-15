import { typeClassStore } from "../../store/typeClassStore";
import { useState, useEffect } from "react";

export function useClass() {
	const { classes: dataClasses } = typeClassStore(state => state)
	const [classes, setClasses] = useState([])

	useEffect(() => {
		const newClasses = dataClasses?.map((item) => ({
			id: item.id,
			startDay: item.start_day,
			endDay: item.end_day,
			startHour: item.start_hour,
			endHour: item.end_hour,
			acountStudent: item.acount_student,
			createdAt: item.createdAt,
			updatedAt: item.updatedAt,
			NameClasses: item?.NameClasses[0].map(item => ({
				id: item.id,
				name: item.name,
			}))
		}))
		setClasses(newClasses)
	}, [dataClasses])

	return {
		classes
	}
} 
