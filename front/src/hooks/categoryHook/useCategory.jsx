import { categoryStore } from "../../store/categoryStore";
import { useState, useEffect } from "react";

export function useCategory() {
  const { category: categoryData } = categoryStore(state => state)
  const [category, setCategory] = useState([])

  useEffect(() => {
    const newCategory = categoryData?.map((item) => ({
      id: item.id, 
      name: String(item.name).toUpperCase(),
      value: item.id
    }))
    newCategory.unshift({ id: 0, value: '', name: '[CATEGORIA]' })
    setCategory(newCategory)
  }, [categoryData])

  return {
    category
  }
}