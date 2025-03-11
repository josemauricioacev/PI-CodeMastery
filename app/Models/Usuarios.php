<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuarios';
    protected $primaryKey = 'id_usuario';
    
    protected $fillable = [
        'Nombre', 'Contraseña', 'Correo', 'Fecha_registro', 'id_persona', 'id_historial'
    ];
    
    // Relación con Persona
    public function persona()
    {
        return $this->belongsTo(Persona::class, 'id_persona');
    }
    
    // Relación con HistorialActividad
    public function historialActividad()
    {
        return $this->belongsTo(HistorialActividad::class, 'id_historial');
    }
}