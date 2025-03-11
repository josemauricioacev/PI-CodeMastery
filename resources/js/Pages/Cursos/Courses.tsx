"use client";

import type React from "react";
import { useState } from "react";
import { Link } from "@inertiajs/react";

interface Course {
    id: number;
    title: string;
    level: string;
    category: string;
    lessons: number;
    hours: number;
    description: string;
}

const allCourses: Course[] = [
    {
        id: 1,
        title: "Python para Principiantes",
        level: "Principiante",
        category: "Python",
        lessons: 24,
        hours: 12,
        description:
            "Aprende los fundamentos de Python desde cero. Ideal para quienes no tienen experiencia previa en programación.",
    },
    {
        id: 2,
        title: "Python Intermedio",
        level: "Intermedio",
        category: "Python",
        lessons: 28,
        hours: 14,
        description:
            "Profundiza tus conocimientos de Python con conceptos avanzados y aplicaciones prácticas.",
    },
    {
        id: 3,
        title: "Python Avanzado",
        level: "Avanzado",
        category: "Python",
        lessons: 30,
        hours: 16,
        description:
            "Domina técnicas avanzadas de Python para desarrollo profesional y optimización de código.",
    },
    {
        id: 4,
        title: "Desarrollo Web con JavaScript",
        level: "Intermedio",
        category: "JavaScript",
        lessons: 32,
        hours: 16,
        description:
            "Domina JavaScript y aprende a crear sitios web interactivos con las tecnologías más modernas del mercado.",
    },
    {
        id: 5,
        title: "Ciencia de Datos con Python",
        level: "Avanzado",
        category: "Data Science",
        lessons: 28,
        hours: 14,
        description:
            "Aprende a analizar y visualizar datos utilizando las bibliotecas más populares de Python para ciencia de datos.",
    },
    {
        id: 6,
        title: "Automatización con Python",
        level: "Intermedio",
        category: "Automation",
        lessons: 26,
        hours: 13,
        description:
            "Descubre cómo automatizar tareas repetitivas con Python y aumenta tu productividad.",
    },
];

const Courses: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    // Obtenemos todas las categorías únicas para los filtros de pestañas
    const uniqueCategories = [
        "Todos",
        ...new Set(allCourses.map((course) => course.category)),
    ];

    const filteredCourses = allCourses.filter(
        (course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === "" ||
                selectedCategory === "Todos" ||
                course.category === selectedCategory)
    );

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category === "Todos" ? "" : category);
    };

    // Función para obtener el color de fondo según la categoría
    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Python":
                return "bg-blue-50";
            case "JavaScript":
                return "bg-yellow-50";
            case "Data Science":
                return "bg-green-50";
            case "Automation":
                return "bg-purple-50";
            default:
                return "bg-gray-50";
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header con botón de volver y título */}
            <div className="flex items-center mb-8">
                <Link href="/" className="flex items-center text-gray-600 mr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Volver al inicio
                </Link>
                <h1 className="text-2xl font-bold">Explora nuestros cursos</h1>
            </div>

            {/* Barra de búsqueda y filtros */}
            <div className="flex justify-between mb-8">
                <div className="relative flex-grow mr-4">
                    <input
                        type="text"
                        placeholder="Buscar cursos..."
                        className="w-full px-4 py-2 border rounded-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg
                        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <button className="px-4 py-2 border rounded-lg flex items-center bg-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                    </svg>
                    Filtros
                </button>
            </div>

            {/* Pestañas de categorías */}
            <div className="flex overflow-x-auto mb-6 pb-2">
                {uniqueCategories.map((category) => (
                    <button
                        key={category}
                        className={`px-6 py-2 mx-1 whitespace-nowrap rounded-lg ${
                            (category === "Todos" && selectedCategory === "") ||
                            category === selectedCategory
                                ? "bg-gray-800 text-white"
                                : "bg-gray-100 text-gray-800"
                        }`}
                        onClick={() => handleCategorySelect(category)}
                    >
                        {category === "Data Science"
                            ? "IA"
                            : category === "Automation"
                            ? "Bases de Datos"
                            : category}
                    </button>
                ))}
            </div>

            {/* Tarjetas de cursos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ${getCategoryColor(
                            course.category
                        )}`}
                    >
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <svg
                                className="h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
                                />
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">
                                {course.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-4">
                                <div className="flex items-center">
                                    <svg
                                        className="h-5 w-5 text-purple-600 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                    <span>{course.lessons} lecciones</span>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="h-5 w-5 text-purple-600 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{course.hours} horas</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <svg
                                        className="h-5 w-5 text-purple-600 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                    <span>Nivel: {course.level}</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href={`/courses/${course.id}`}
                                    className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition duration-300"
                                >
                                    Ver curso
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredCourses.length === 0 && (
                <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
                    No se encontraron cursos que coincidan con tu búsqueda.
                </p>
            )}
        </div>
    );
};

export default Courses;
