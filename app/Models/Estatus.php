<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estatus extends Model
{
    protected $table = 'estatus';
    protected $primaryKey = 'id_estatus';
    
    protected $fillable = ['Nombre'];
    
    // Relación con Modulo
    public function modulos()
    {
        return $this->hasMany(Modulo::class, 'id_estatus');
    }
}
