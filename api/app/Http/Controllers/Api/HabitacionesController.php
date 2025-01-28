<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateHabitacionesRequest;
use App\Http\Requests\UpdateHabitacionesRequest;
use App\Models\Habitaciones;
use Illuminate\Http\Request;

class HabitacionesController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Habitaciones::all();
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(CreateHabitacionesRequest $request)
  {
    return Habitaciones::create($request->validated());
  }

  /**
   * Display the specified resource.
   */
  public function show($id)
  {
    return Habitaciones::find($id);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateHabitacionesRequest $request, $id)
  {
    $habitaciones = Habitaciones::find($id);
    if (!$habitaciones) {
      return response([
        "errors" => "Doesn't exist"
      ], 400);
    }

    if ($request->has('hotel_id')) $habitaciones->hotel_id = $request->hotel_id;
    if ($request->has('tipo_habitacion_id')) $habitaciones->tipo_habitacion_id = $request->tipo_habitacion_id;
    if ($request->has('acomodacion_id')) $habitaciones->acomodacion_id = $request->acomodacion_id;
    if ($request->has('cantidad')) $habitaciones->cantidad = $request->cantidad;

    $habitaciones->save();
    return $habitaciones;
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    $habitaciones = Habitaciones::find($id);
    if (!$habitaciones) {
      return response([
        "errors" => "Doesn't exist"
      ], 400);
    }

    $habitaciones->delete();

    return $habitaciones;
  }
}
