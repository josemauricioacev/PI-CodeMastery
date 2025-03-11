import React from "react";

interface InputErrorProps {
    message?: string;
    className?: string;
}

/**
 * Componente para mostrar mensajes de error en formularios
 *
 * Este componente se utiliza para mostrar errores de validación
 * debajo de los campos de formulario. Muestra el mensaje solo
 * si existe y aplica estilos consistentes con el diseño de la aplicación.
 *
 * @param message - El mensaje de error a mostrar
 * @param className - Clases CSS adicionales para personalizar el componente
 */
export default function InputError({
    message,
    className = "",
}: InputErrorProps) {
    // No renderizar nada si no hay mensaje
    if (!message) {
        return null;
    }

    return (
        <div className={`text-sm text-red-600 ${className}`}>
            <div className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
                <span>{message}</span>
            </div>
        </div>
    );
}
