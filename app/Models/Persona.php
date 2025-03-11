<?php
// Archivo: app/Models/Persona.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    protected $table = 'personas';
    protected $primaryKey = 'id_persona';
    
    protected $fillable = [
        'Nombre', 'AP', 'AM', 'Fecha_nac', 'Genero'
    ];
    
    // Relación con Usuario
    public function usuario()
    {
        return $this->hasOne(Usuario::class, 'id_persona');
    }
}
