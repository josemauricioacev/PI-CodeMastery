<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('historial_actividades', function (Blueprint $table) {
            $table->id('id_historial');
            $table->integer('Cantidad_lecciones');
            $table->string('Tipo_actividad', 150);
            $table->string('Detalles', 200);
            $table->date('Fecha_actividad');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('historial_actividades');
    }
};
