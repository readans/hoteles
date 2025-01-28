<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoHabitacionSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('tipo_habitacion')->insert([
      ['nombre' => 'Estándar'],
      ['nombre' => 'Junior'],
      ['nombre' => 'Suite'],
    ]);
  }
}
