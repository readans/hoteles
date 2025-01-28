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
    Schema::table('habitaciones', function (Blueprint $table) {
      $table->dropForeign(['hotel_id']); // Eliminar la relación existente
      $table->foreign('hotel_id')
        ->references('id')->on('hotel')
        ->onDelete('cascade'); // Agregar la relación con cascada

    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::table('habitaciones', function (Blueprint $table) {
      //
    });
  }
};
