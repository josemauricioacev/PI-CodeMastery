<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('modulos', function (Blueprint $table) {
            $table->id('id_modulo');
            $table->string('Nombre', 150);
            $table->string('Descripcion', 300);
            $table->date('Fecha_creacion');
            $table->unsignedBigInteger('id_estatus');
            $table->timestamps();
            
            $table->foreign('id_estatus')->references('id_estatus')->on('estatus');
        });
    }

    public function down()
    {
        Schema::dropIfExists('modulos');
    }
};