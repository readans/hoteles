<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoHabitacion extends Model
{
  protected $table = 'tipo_habitacion';

  protected $fillable = [
    'nombre'
  ];
}
