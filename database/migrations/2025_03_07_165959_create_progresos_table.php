<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('progresos', function (Blueprint $table) {
            $table->id('id_progreso');
            $table->integer('Porcentaje_completado');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('progresos');
    }
};
