<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Progreso extends Model
{
    protected $table = 'progresos';
    protected $primaryKey = 'id_progreso';
    
    protected $fillable = ['Porcentaje_completado'];
    
    // Relación con Leccion
    public function lecciones()
    {
        return $this->hasMany(Leccion::class, 'Progreso');
    }
}
