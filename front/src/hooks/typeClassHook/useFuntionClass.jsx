import { classStore } from "../../store/classStore";

export function useFunctionClass() {
  const { addClass } = classStore(state => state);

  function findTuesdaysAndThursdaysInMonth(year, month) {
    const result = [];
    const startDate = new Date(year, month - 1, 1); // Crear fecha al inicio del mes
    const endDate = new Date(year, month, 0); // Crear fecha al final del mes
  
    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      const dayOfWeek = day.getDay();
      if (dayOfWeek === 2 || dayOfWeek === 4) { // Si es martes (2) o jueves (4)
        result.push({
          day: `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`
        });
      }
    }
  
    return result;
  }

  const onSubmit = async (values) => {
    try {
      for await (const value of values){
        await addClass(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onSubmit,
    findTuesdaysAndThursdaysInMonth
  };
}
