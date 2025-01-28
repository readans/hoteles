<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateHotelRequest;
use App\Http\Requests\UpdateHotelRequest;
use App\Models\Hotel;

class HotelController extends Controller
{
  public function index()
  {
    return Hotel::all();
  }

  public function store(CreateHotelRequest $request)
  {
    return Hotel::create($request->validated());
  }

  public function show($id)
  {
    // return Hotel::find($id)->load('habitaciones');
    return Hotel::with(['habitaciones.tipoHabitacion', 'habitaciones.acomodacion'])->find($id);
  }

  public function update(UpdateHotelRequest $request, $id)
  {
    $hotel = Hotel::find($id);
    if (!$hotel) {
      return response([
        "errors" => "Doesn't exist"
      ], 400);
    }

    if ($request->has('nombre')) $hotel->nombre = $request->nombre;
    if ($request->has('direccion')) $hotel->direccion = $request->direccion;
    if ($request->has('ciudad')) $hotel->ciudad = $request->ciudad;
    if ($request->has('nit')) $hotel->nit = $request->nit;
    if ($request->has('max_habitaciones')) $hotel->max_habitaciones = $request->max_habitaciones;

    $hotel->save();
    return $hotel;
  }

  public function destroy($id)
  {
    $hotel = Hotel::find($id);
    if (!$hotel) {
      return response([
        "errors" => "Doesn't exist"
      ], 400);
    }

    $hotel->delete();

    return $hotel;
  }
}
