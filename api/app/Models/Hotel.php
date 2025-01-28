<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{

  protected $table = 'hotel';

  protected $fillable = [
    'nombre',
    'direccion',
    'ciudad',
    'nit',
    'max_habitaciones'
  ];

  public function habitaciones()
  {
    return $this->hasMany(Habitaciones::class);
  }

  public function delete()
  {
    $this->habitaciones()->delete();

    return parent::delete();
  }
}
