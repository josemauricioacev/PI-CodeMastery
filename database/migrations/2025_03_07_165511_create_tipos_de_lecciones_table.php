<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('tipos_de_lecciones', function (Blueprint $table) {
            $table->id('id_tipo_leccion');
            $table->string('Nombre', 50);
            $table->string('Descripcion', 200);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tipos_de_lecciones');
    }
};