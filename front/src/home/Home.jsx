import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage"; 
import { StudentsPage } from "../pages/StudentsPage";
import { Sidebar } from '../components/sidebar/Sidebar'
import { SchedulePage } from "../pages/SchedulePage";
import { levelStore } from "../store/levelStore";
import { categoryStore } from "../store/categoryStore";
import { classStore } from "../store/classStore";

export function Home() {
  const { getClass, typeClass } = classStore(state => state)
  const { getLevel } = levelStore(state => state)
  const { getCategory } = categoryStore(state => state)

  useEffect(() => {
    getClass()
    getLevel()
    getCategory()
  }, [getLevel, getCategory, getClass]); 
  return (
    <div className="flex flex-col">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-4/5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/alumnos" element={<StudentsPage />} />
            <Route path="/horarios" element={<SchedulePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
