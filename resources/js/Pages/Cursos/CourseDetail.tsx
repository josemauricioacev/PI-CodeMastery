"use client"

import type React from "react"
import { useParams } from "react-router-dom"

interface Module {
  title: string
  lessons: number
}

interface Course {
  title: string
  description: string
  modules: Module[]
  instructor: string
  duration: string
  level: string
}

const courses: { [key: string]: Course } = {
  "1": {
    title: "Introducción a Python",
    description:
      "Este curso te enseñará los fundamentos de Python de manera interactiva y práctica. Perfecto para principiantes sin experiencia previa en programación.",
    modules: [
      { title: "Introducción a la programación", lessons: 3 },
      { title: "Variables y tipos de datos", lessons: 4 },
      { title: "Estructuras de control", lessons: 5 },
      { title: "Funciones", lessons: 4 },
      { title: "Estructuras de datos", lessons: 6 },
    ],
    instructor: "Ana Martínez",
    duration: "6 semanas",
    level: "Principiante",
  },
  // ... Otros cursos
}

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const course = courses[id]

  if (!course) {
    return <div className="container mx-auto px-4 py-8">Curso no encontrado</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">{course.title}</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <p className="text-xl mb-4">{course.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>Instructor:</strong> {course.instructor}
          </div>
          <div>
            <strong>Duración:</strong> {course.duration}
          </div>
          <div>
            <strong>Nivel:</strong> {course.level}
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Contenido del Curso</h3>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {course.modules.map((module, index) => (
          <div key={index} className="border-b last:border-b-0 p-4">
            <h4 className="text-lg font-medium mb-2">
              Módulo {index + 1}: {module.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400">{module.lessons} lecciones</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300">
          Inscribirse al Curso
        </button>
      </div>
    </div>
  )
}

export default CourseDetail

