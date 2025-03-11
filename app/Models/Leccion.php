<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Leccion extends Model
{
    protected $table = 'lecciones';
    protected $primaryKey = 'id_leccion';
    
    protected $fillable = [
        'Nombre', 'Duracion', 'Numero_leccion', 'Dificultad', 'Progreso', 'Tipo_leccion'
    ];
    
    public function progreso()
    {
        return $this->belongsTo(Progreso::class, 'Progreso');
    }
    
    public function tipoLeccion()
    {
        return $this->belongsTo(TipoLeccion::class, 'Tipo_leccion');
    }
}