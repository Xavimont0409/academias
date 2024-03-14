import { useEffect, useState } from "react";
import { studentStore } from "../store/studentStore";
import { teacherStore } from "../store/teacherStore";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage"; 
import { StudentsPage } from "../pages/StudentsPage";
import { Sidebar } from '../components/sidebar/Sidebar'
import { SchedulePage } from "../pages/SchedulePage";
import { levelStore } from "../store/levelStore";
import { categoryStore } from "../store/categoryStore";

export function Home() {
  const [open, setOpen] = useState(true)
  const { getAllStudents } = studentStore(state => state)
  const { getAllTeacher } = teacherStore(state => state)
  const { getLevel } = levelStore(state => state)
  const { getCategory } = categoryStore(state => state)

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    getAllTeacher()
    getLevel()
    getCategory()
  }, [getAllStudents, getAllTeacher, getLevel, getCategory]); 
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
            <Route path="/home" element={<HomePage />} />
            <Route path="/alumnos" element={<StudentsPage />} />
            <Route path="/horarios" element={<SchedulePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
