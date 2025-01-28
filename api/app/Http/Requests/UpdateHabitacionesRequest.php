<?php

namespace App\Http\Requests;

use App\Models\Hotel;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class UpdateHabitacionesRequest extends FormRequest
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
      'hotel_id' => ['exists:hotel,id'],
      'tipo_habitacion_id' => ['exists:tipo_habitacion,id'],
      'acomodacion_id' => ['exists:acomodacion,id'],
      'cantidad' => ['integer', 'min:1']
    ];
  }

  public function withValidator(Validator $validator)
  {
    $validator->after(function ($validator) {
      $hotelId = $this->input('hotel_id');
      $newQuantity = $this->input('cantidad');

      // Obtener el hotel y su límite máximo de habitaciones
      $hotel = Hotel::find($hotelId);
      if (!$hotel) return;

      // Sumar todas las habitaciones ya configuradas
      $totalRoomsConfigured = $hotel->habitaciones()->sum('cantidad');

      // Verificar si al agregar esta nueva cantidad se excede el máximo
      if (($totalRoomsConfigured + $newQuantity) > $hotel->max_habitaciones) {
        $validator->errors()->add('quantity', 'La cantidad total de habitaciones supera el límite permitido por el hotel.');
      }

      $roomTypeId = $this->input('tipo_habitacion_id');
      $accommodationId = $this->input('acomodacion_id');

      // Validar que el tipo de habitación coincida con las acomodaciones permitidas
      if (!$this->isValidRoomTypeAndAccommodation($roomTypeId, $accommodationId)) {
        $validator->errors()->add(
          'acomodacion_id',
          'La acomodación seleccionada no es válida para el tipo de habitación seleccionado.'
        );
      }
    });
  }

  private function isValidRoomTypeAndAccommodation($roomTypeId, $accommodationId): bool
  {
    // Define las reglas para los tipos de habitaciones y sus acomodaciones
    $validations = [
      1 => [1, 2], // Estándar: Sencilla (1) o Doble (2)
      2 => [3, 4], // Junior: Triple (3) o Cuádruple (4)
      3 => [1, 2, 3], // Suite: Sencilla (1), Doble (2) o Triple (3)
    ];

    return isset($validations[$roomTypeId]) && in_array($accommodationId, $validations[$roomTypeId]);
  }
}
