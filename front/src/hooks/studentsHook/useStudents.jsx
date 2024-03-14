import { studentStore } from "../../store/studentStore";
import { useState, useEffect } from "react";

export function useStudents() {
  const { students: studentsData } = studentStore((state) => state);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const newStudents = studentsData?.map((item) => ({
      id: item.id,
      name: String(item.name).toUpperCase(),
      lastName: String(item.last_name).toUpperCase(),
      age: item.age,
      address: item.address,
      phone: item.phone,
      nameTutor: item.name_tutor,
      size: item.size,
      CategoryId: item.Categories[0]?.id,
      CategoryName: String(item.Categories[0]?.name).toUpperCase(),
      LevelId: item.Levels[0]?.id,
      LevelName: String(item.Levels[0]?.name).toUpperCase()
    }));
    setStudents(newStudents);
  }, [studentsData]);
  return {
    students
  }
}
