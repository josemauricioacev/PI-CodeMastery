import React, { ReactNode } from "react";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="border-b bg-white">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Code className="h-6 w-6 text-purple-600" />
                        <span className="font-bold text-xl">CodeLearn</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/cursos"
                            className="text-gray-600 hover:text-purple-600 transition"
                        >
                            Cursos
                        </Link>
                        <Link
                            href="/recursos"
                            className="text-gray-600 hover:text-purple-600 transition"
                        >
                            Recursos
                        </Link>
                        <Link
                            href="/comunidad"
                            className="text-gray-600 hover:text-purple-600 transition"
                        >
                            Comunidad
                        </Link>
                        <Link
                            href="/blog"
                            className="text-gray-600 hover:text-purple-600 transition"
                        >
                            Blog
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-3">
                        <Link href="/login">
                            <Button
                                variant="outline"
                                className="hidden sm:inline-flex"
                            >
                                Iniciar Sesión
                            </Button>
                        </Link>
                        <Link href="/registro">
                            <Button className="bg-purple-600 hover:bg-purple-700">
                                Registrarse
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <Code className="h-6 w-6 text-purple-400" />
                                <span className="font-bold text-xl">
                                    CodeLearn
                                </span>
                            </div>
                            <p className="text-gray-400">
                                Plataforma de aprendizaje de programación
                                diseñada para estudiantes hispanohablantes.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Enlaces</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/cursos"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Cursos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/recursos"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Recursos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/comunidad"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Comunidad
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/privacidad"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Política de Privacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/terminos"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Términos de Servicio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/cookies"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Política de Cookies
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-4">Contacto</h4>
                            <ul className="space-y-2">
                                <li className="text-gray-400">
                                    soporte@codelearn.com
                                </li>
                                <li className="text-gray-400">
                                    +52 123 456 7890
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>
                            © {new Date().getFullYear()} CodeLearn. Todos los
                            derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
