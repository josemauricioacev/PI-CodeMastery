<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoLeccion extends Model
{
    protected $table = 'tipos_de_lecciones';
    protected $primaryKey = 'id_tipo_leccion';
    
    protected $fillable = ['Nombre', 'Descripcion'];
    
    // Relación con Leccion
    public function lecciones()
    {
        return $this->hasMany(Leccion::class, 'Tipo_leccion');
    }
}

