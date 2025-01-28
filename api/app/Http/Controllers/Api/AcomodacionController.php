<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Acomodacion;
use Illuminate\Http\Request;

class AcomodacionController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Acomodacion::all();
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
  public function show(Acomodacion $acomodacion)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Acomodacion $acomodacion)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Acomodacion $acomodacion)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Acomodacion $acomodacion)
  {
    //
  }
}
