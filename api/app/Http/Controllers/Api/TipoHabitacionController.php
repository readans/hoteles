<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoHabitacion;
use Illuminate\Http\Request;

class TipoHabitacionController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return TipoHabitacion::all();
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(TipoHabitacion $tipoHabitacion)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(TipoHabitacion $tipoHabitacion)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, TipoHabitacion $tipoHabitacion)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(TipoHabitacion $tipoHabitacion)
  {
    //
  }
}
