<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateHotelRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'nombre' => 'string|max:255',
      'direccion' => 'string|max:255',
      'ciudad' => 'string|max:100',
      'nit' => 'string|max:20',
      'max_habitaciones' => 'integer|min:1'
    ];
  }
}
