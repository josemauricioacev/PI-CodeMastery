<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HistorialActividad extends Model
{
    protected $table = 'historial_actividades';
    protected $primaryKey = 'id_historial';
    
    protected $fillable = [
        'Cantidad_lecciones', 'Tipo_actividad', 'Detalles', 'Fecha_actividad'
    ];
    
    // Relación con Usuario
    public function usuario()
    {
        return $this->hasOne(Usuario::class, 'id_historial');
    }
}
