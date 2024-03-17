import { useState, useEffect } from "react";
import { classStore } from "../../store/classStore";

export function useClass() {
	const { typeClass: classData } = classStore()
	const [classes, setClasses] = useState([])

	useEffect(() => {
		const newClasses = classData?.map((item) => ({
			id: item.id,
			startDay: item.start_day,
			endDay: item.end_day,
			startHour: item.start_hour,
			endHour: item.end_hour,
			acountStudent: item.acount_student,
			createdAt: item.createdAt,
			updatedAt: item.updatedAt,
			start: `${item.start_day.slice(0,10)}T${item.start_hour}`,
			end: `${item.end_day.slice(0,10)}T${item.start_hour}`,
			NameClasses: item?.NameClasses.map(item => ({
				id: item.id,
				name: item.name,
			})),
			uniqueValue: item.uniqueValue
		}))
		setClasses(newClasses)
	}, [classData])

	return {
		classes
	}
} 
