<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id('id_usuario');
            $table->string('Nombre', 150);
            $table->string('Contraseña', 200);
            $table->string('Correo', 150);
            $table->date('Fecha_registro');
            $table->unsignedBigInteger('id_persona');
            $table->unsignedBigInteger('id_historial');
            $table->timestamps();
            
            $table->foreign('id_persona')->references('id_persona')->on('personas');
            $table->foreign('id_historial')->references('id_historial')->on('historial_actividades');
        });
    }

    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
};