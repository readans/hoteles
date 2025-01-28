<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('habitaciones', function (Blueprint $table) {
      $table->id();
      $table->foreignId('hotel_id')->constrained('hotel', 'id');
      $table->foreignId('tipo_habitacion_id')->constrained('tipo_habitacion', 'id');
      $table->foreignId('acomodacion_id')->constrained('acomodacion', 'id');
      $table->integer('cantidad');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('habitaciones');
  }
};
