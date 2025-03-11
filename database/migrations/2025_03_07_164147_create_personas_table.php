<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->id('id_persona');
            $table->string('Nombre', 50);
            $table->string('AP', 50);
            $table->string('AM', 50); 
            $table->date('Fecha_nac');
            $table->string('Genero', 50);
            $table->timestamps(); 
        });
    }

    public function down()
    {
        Schema::dropIfExists('personas');
    }
};
