<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evaluacion extends Model
{
    protected $table = 'evaluaciones';
    protected $primaryKey = 'id_evaluacion';
    
    protected $fillable = [
        'Fecha_creacion', 'Fecha_limite', 'Puntuacion'
    ];
}
