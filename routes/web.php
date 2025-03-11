<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CursosController;
use App\Http\Controllers\AuthCustomController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Página de inicio
Route::get('/', [HomeController::class, 'index'])->name('home');

// Rutas de cursos
Route::get('/cursos', [CursosController::class, 'index'])->name('cursos');
Route::get('/cursos/{id}', [CursosController::class, 'show'])->name('cursos.show');

// Recursos, comunidad, blog
Route::get('/recursos', function() { return Inertia::render('Recursos'); })->name('recursos');
Route::get('/comunidad', function() { return Inertia::render('Comunidad'); })->name('comunidad');
Route::get('/blog', function() { return Inertia::render('Blog'); })->name('blog');

// Rutas de autenticación personalizadas
Route::middleware('guest')->group(function () {
    // Vistas de autenticación
    Route::get('/login', [AuthCustomController::class, 'login'])->name('login');
    Route::get('/registro', [AuthCustomController::class, 'register'])->name('register');
    
    // Procesar formularios de autenticación
    Route::post('/login', [AuthCustomController::class, 'authenticate'])->name('login.authenticate');
    Route::post('/registro', [AuthCustomController::class, 'store'])->name('register.store');
});

// Rutas protegidas (requieren autenticación)
Route::middleware('auth')->group(function () {
    // Cerrar sesión
    Route::post('/logout', [AuthCustomController::class, 'logout'])->name('logout');
    
    // Perfil de usuario
    Route::get('/perfil', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/perfil', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/perfil', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Rutas de recuperación de contraseña (básicas para que funcione la opción "Olvidaste tu contraseña")
Route::get('/forgot-password', function () {
    return Inertia::render('Auth/ForgotPassword', [
        'status' => session('status'),
    ]);
})->middleware('guest')->name('password.request');