import { levelStore } from "../../store/levelStore";
import { useState, useEffect } from "react";

export function useLevel() {
  const { level: levelData } = levelStore((state) => state)
  const [ level, setLevel ] = useState([])

  useEffect(() => {
    const newLevel = levelData?.map((item) => ({
      id: item.id,
      name: String(item.name).toUpperCase(),
      value: item.id
    }))
    newLevel.unshift({ id: 0, value: '', name: '[NIVEL]' })
    setLevel(newLevel)
  }, [levelData])
  return {
    level
  }
}