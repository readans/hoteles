<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Habitaciones extends Model
{
  protected $table = 'habitaciones';

  protected $fillable = [
    'hotel_id',
    'tipo_habitacion_id',
    'acomodacion_id',
    'cantidad'
  ];

  /**
   * Relación con Hotel: Muchas habitaciones pertenecen a un hotel.
   */
  public function hotel()
  {
    return $this->belongsTo(Hotel::class, 'hotel_id');
  }

  /**
   * Relación con Tipo de Habitación (Opcional).
   */
  public function tipoHabitacion()
  {
    return $this->belongsTo(TipoHabitacion::class, 'tipo_habitacion_id');
  }

  /**
   * Relación con Acomodación (Opcional).
   */
  public function acomodacion()
  {
    return $this->belongsTo(Acomodacion::class, 'acomodacion_id');
  }
}
