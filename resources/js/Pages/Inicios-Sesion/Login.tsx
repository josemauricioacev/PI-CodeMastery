import { FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/ui/input-error";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Head title="Iniciar Sesión" />

            {/* Barra de navegación superior */}
            <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center">
                {/* Botón de volver */}
                <Link
                    href="/"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
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

                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-purple-600 font-bold text-2xl">
                        &#60;&#47;&#62;
                    </span>
                    <span className="font-bold text-2xl ml-2">CodeLearn</span>
                </div>
            </nav>

            {/* Espacio adicional entre la barra de navegación y el formulario */}
            <div className="h-12"></div>

            {/* Contenedor principal del formulario centrado */}
            <div className="flex-grow flex items-center justify-center px-4">
                <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <h2 className="text-3xl font-bold text-center mb-2">
                        Iniciar sesión
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        Bienvenido de nuevo a CodeLearn
                    </p>

                    <form onSubmit={submit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="w-full px-4 py-3 rounded-lg border focus:border-purple-500 focus:ring-purple-500"
                                placeholder="tu@email.com"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            )}
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 font-medium"
                                >
                                    Contraseña
                                </label>
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="text-purple-600 hover:text-purple-800 text-sm"
                                    >
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                )}
                            </div>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="w-full px-4 py-3 rounded-lg border focus:border-purple-500 focus:ring-purple-500"
                                placeholder="••••••••"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    className="rounded border-gray-300 text-purple-600 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ml-2 text-gray-600">
                                    Recordarme
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-200"
                            disabled={processing}
                        >
                            Iniciar sesión
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 text-sm text-gray-500">
                                    O continúa con
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-center space-x-4">
                            <button className="flex items-center justify-center w-full border rounded-lg py-2 px-4 hover:bg-gray-50">
                                <svg
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                        fill="#4285F4"
                                    />
                                </svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center w-full border rounded-lg py-2 px-4 hover:bg-gray-50">
                                <svg
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                        fill="#333"
                                    />
                                </svg>
                                GitHub
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            ¿No tienes una cuenta?{" "}
                            <Link
                                href={route("register")}
                                className="text-purple-600 hover:text-purple-800 font-medium"
                            >
                                Regístrate
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Espacio adicional en la parte inferior */}
            <div className="h-12"></div>
        </div>
    );
}
