<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('lecciones', function (Blueprint $table) {
            $table->id('id_leccion');
            $table->string('Nombre', 150);
            $table->string('Duracion', 100);
            $table->float('Numero_leccion');
            $table->string('Dificultad', 50);
            $table->unsignedBigInteger('Progreso');
            $table->unsignedBigInteger('Tipo_leccion');
            $table->timestamps();
            
            $table->foreign('Progreso')->references('id_progreso')->on('progresos');
            $table->foreign('Tipo_leccion')->references('id_tipo_leccion')->on('tipos_de_lecciones');
        });
    }

    public function down()
    {
        Schema::dropIfExists('lecciones');
    }
};