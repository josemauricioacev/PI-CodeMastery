import { FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/ui/input-error";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        lastname: "",
        email: "",
        password: "",
        terms: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Head title="Crear Cuenta" />

            {/* Botón de volver */}
            <Link
                href="/"
                className="absolute top-8 left-8 flex items-center text-gray-600 hover:text-gray-900"
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
            <div className="absolute top-8 right-8 flex items-center">
                <span className="text-purple-600 font-bold text-2xl">
                    &#60;&#47;&#62;
                </span>
                <span className="font-bold text-2xl ml-2">CodeLearn</span>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-2">
                    Crear una cuenta
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Únete a nuestra comunidad de aprendizaje
                </p>

                <form onSubmit={submit}>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Nombre
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="w-full px-4 py-3 rounded-lg border focus:border-purple-500 focus:ring-purple-500"
                                placeholder="Tu nombre"
                                autoComplete="given-name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            {errors.name && (
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="lastname"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Apellido
                            </label>
                            <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                value={data.lastname}
                                className="w-full px-4 py-3 rounded-lg border focus:border-purple-500 focus:ring-purple-500"
                                placeholder="Tu apellido"
                                autoComplete="family-name"
                                onChange={(e) =>
                                    setData("lastname", e.target.value)
                                }
                            />
                            {errors.lastname && (
                                <InputError
                                    message={errors.lastname}
                                    className="mt-2"
                                />
                            )}
                        </div>
                    </div>

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
                            autoComplete="email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="w-full px-4 py-3 rounded-lg border focus:border-purple-500 focus:ring-purple-500"
                            placeholder="••••••••"
                            autoComplete="new-password"
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
                        <p className="text-sm text-gray-500 mt-1">
                            La contraseña debe tener al menos 8 caracteres
                        </p>
                    </div>

                    <div className="mb-6">
                        <label className="flex items-start">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={data.terms}
                                className="rounded border-gray-300 text-purple-600 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50 mt-1"
                                onChange={(e) =>
                                    setData("terms", e.target.checked)
                                }
                            />
                            <span className="ml-2 text-gray-600">
                                Acepto los{" "}
                                <a
                                    href="#"
                                    className="text-purple-600 hover:text-purple-800"
                                >
                                    Términos de servicio
                                </a>{" "}
                                y la{" "}
                                <a
                                    href="#"
                                    className="text-purple-600 hover:text-purple-800"
                                >
                                    Política de privacidad
                                </a>
                            </span>
                        </label>
                        {errors.terms && (
                            <InputError
                                message={errors.terms}
                                className="mt-2"
                            />
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-200"
                        disabled={processing}
                    >
                        Crear cuenta
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        ¿Ya tienes una cuenta?{" "}
                        <Link
                            href={route("login")}
                            className="text-purple-600 hover:text-purple-800 font-medium"
                        >
                            Iniciar sesión
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
