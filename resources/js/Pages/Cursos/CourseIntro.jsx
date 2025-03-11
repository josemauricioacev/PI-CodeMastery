"use client"
import { useParams } from "react-router-dom"

function CourseIntro() {
  const { id } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Introducción al Curso {id}</h2>
      <p className="text-xl mb-4">Este curso te enseñará los fundamentos de Python de manera interactiva y práctica.</p>
      <ul className="list-disc list-inside mb-6">
        <li>Aprende a tu propio ritmo</li>
        <li>Ejercicios prácticos y proyectos reales</li>
        <li>Soporte en español</li>
      </ul>
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
        Comenzar Curso
      </button>
    </div>
  )
}

export default CourseIntro

