import React from "react";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import Layout from "@/Layouts/Layout";
import {
    Code,
    BookOpen,
    Moon,
    Laptop,
    ArrowRight,
    ChevronRight,
} from "lucide-react";

// Si es necesario definir props para la página Home
interface HomeProps {
    // Si recibes props del controlador, defínelas aquí
}

export default function Home({}: HomeProps) {
    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
                {/* Hero Section */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                    Explora tu creatividad sin miedo
                                </h1>
                                <p className="text-lg text-gray-600 mb-8">
                                    Mejora tus habilidades de programación con
                                    nuestra plataforma interactiva. Aprende
                                    Python y otros lenguajes a tu propio ritmo.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/comenzar">
                                        <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">
                                            Comenzar ahora
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link href="/cursos">
                                        <Button
                                            variant="outline"
                                            className="text-lg py-6 px-8"
                                        >
                                            Ver cursos
                                        </Button>
                                    </Link>
                                </div>
                                <div className="mt-8 flex flex-wrap items-center gap-8">
                                    <div className="flex items-center">
                                        <BookOpen className="h-5 w-5 text-purple-600 mr-2" />
                                        <span>+50 cursos</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Laptop className="h-5 w-5 text-purple-600 mr-2" />
                                        <span>Proyectos prácticos</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Moon className="h-5 w-5 text-purple-600 mr-2" />
                                        <span>Modo nocturno</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-purple-100 rounded-lg p-6 relative z-10">
                                    <img
                                        src="/Assets/placeholder.svg"
                                        alt="Plataforma de aprendizaje"
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-200 rounded-full -z-10"></div>
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-200 rounded-full -z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">
                                ¿Por qué elegir nuestra plataforma?
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Diseñada pensando en las necesidades reales de
                                los estudiantes de programación
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-slate-50 p-8 rounded-lg">
                                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <Moon className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Modo Nocturno
                                </h3>
                                <p className="text-gray-600">
                                    Sabemos que prefieres estudiar por la noche,
                                    por eso optimizamos nuestra plataforma para
                                    sesiones nocturnas.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-lg">
                                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <Code className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Python Primero
                                </h3>
                                <p className="text-gray-600">
                                    Enfoque especial en Python, el lenguaje más
                                    solicitado por nuestros usuarios.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-lg">
                                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <BookOpen className="h-6 w-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Documentación en Español
                                </h3>
                                <p className="text-gray-600">
                                    Todos nuestros recursos están disponibles en
                                    español para eliminar la barrera del idioma.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Courses Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold">
                                Cursos Populares
                            </h2>
                            <Link
                                href="/cursos"
                                className="flex items-center text-purple-600 hover:text-purple-700"
                            >
                                Ver todos
                                <ChevronRight className="ml-1 h-5 w-5" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="bg-blue-100 p-4">
                                    <img
                                        src="/Assets/Python.png"
                                        alt="Python para Principiantes"
                                        className="w-100 h-40 object-cover rounded"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">
                                        Python para Principiantes
                                    </h3>
                                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                                        <span>24 lecciones</span>
                                        <span>Nivel: Principiante</span>
                                    </div>
                                    <Link href="/cursos/1">
                                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                            Ver curso
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="bg-yellow-100 p-4">
                                    <img
                                        src="/Assets/JavaS.png"
                                        alt="Desarrollo Web con JavaScript"
                                        className="w-100 h-40 object-cover rounded"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">
                                        Desarrollo Web con JavaScript
                                    </h3>
                                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                                        <span>32 lecciones</span>
                                        <span>Nivel: Intermedio</span>
                                    </div>
                                    <Link href="/cursos/2">
                                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                            Ver curso
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="bg-green-100 p-4">
                                    <img
                                        src="/Assets/Ciencia-Datos.jpg"
                                        alt="Ciencia de Datos con Python"
                                        className="w-100 h-40 object-cover rounded"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">
                                        Ciencia de Datos con Python
                                    </h3>
                                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                                        <span>28 lecciones</span>
                                        <span>Nivel: Avanzado</span>
                                    </div>
                                    <Link href="/cursos/3">
                                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                            Ver curso
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
