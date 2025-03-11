<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CursosController extends Controller
{
    public function index()
    {
        $courses = [
            [
                'id' => 1,
                'title' => 'Python para Principiantes',
                'description' => 'Aprende los fundamentos de Python desde cero...',
                'lessons' => 24,
                'duration' => '12 horas',
                'level' => 'Principiante',
                'category' => 'python',
                'image' => '/placeholder.svg?height=200&width=300',
                'color' => 'bg-blue-100',
            ],
            [
                'id' => 2,
                'title' => 'JavaScript Moderno',
                'description' => 'Domina las últimas características de JavaScript...',
                'lessons' => 36,
                'duration' => '18 horas',
                'level' => 'Intermedio',
                'category' => 'javascript',
                'image' => '/placeholder.svg?height=200&width=300',
                'color' => 'bg-yellow-100',
            ],
            [
                'id' => 3,
                'title' => 'Diseño Web Responsivo',
                'description' => 'Crea sitios web que se adaptan a cualquier dispositivo...',
                'lessons' => 20,
                'duration' => '10 horas',
                'level' => 'Principiante',
                'category' => 'web',
                'image' => '/placeholder.svg?height=200&width=300',
                'color' => 'bg-green-100',
            ],
            [
                'id' => 4,
                'title' => 'Desarrollo de Aplicaciones Móviles',
                'description' => 'Crea aplicaciones móviles para iOS y Android...',
                'lessons' => 40,
                'duration' => '20 horas',
                'level' => 'Intermedio',
                'category' => 'mobile',
                'image' => '/placeholder.svg?height=200&width=300',
                'color' => 'bg-pink-100',
            ],
        ];

        return Inertia::render('Cursos/Courses', [
            'courses' => $courses
        ]);
    }

    public function show($id)
    {
        $course = [
            'id' => $id,
            'title' => 'Python para Principiantes',
            'description' => 'Aprende los fundamentos...',
            // Resto de datos del curso
        ];

        return Inertia::render('Cursos/CourseDetail', [
            'course' => $course
        ]);
    }

    public function intro($id)
    {
        return Inertia::render('Cursos/CourseIntro', [
            'id' => $id
        ]);
    }
}