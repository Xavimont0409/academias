import { useFunctionClass } from "./useFuntionClass";
import { useClass } from "./useClass";

export function useClassHook () {
  const {
    onSubmit,
    findTuesdaysAndThursdaysInMonth
  } = useFunctionClass()
  const {
    classes
  } = useClass()
  
  return {
    onSubmit,
    classes,
    findTuesdaysAndThursdaysInMonth
  }
}