<?php

use App\Http\Controllers\Api\AcomodacionController;
use App\Http\Controllers\Api\HabitacionesController;
use App\Http\Controllers\Api\HotelController;
use App\Http\Controllers\Api\TipoHabitacionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

Route::resource('/hotels', HotelController::class);
Route::resource('/rooms', HabitacionesController::class);
Route::resource('/roomTypes', TipoHabitacionController::class);
Route::resource('/accomodations', AcomodacionController::class);
