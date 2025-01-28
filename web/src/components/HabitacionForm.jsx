import { useState } from "react";
import Select from "./Select";
import { useEffect } from "react";
import { environment } from "../configuration/environment";

export default function HabitacionForm({ hotel, onSubmit }) {

  const [formData, setFormData] = useState({
    hotel_id: hotel.id,
    tipo_habitacion_id: -1,
    acomodacion_id: -1,
    cantidad: 0
  });

  const [tiposHabitacion, setTiposHabitacion] = useState([])
  const [acomodaciones, setAcomodaciones] = useState([])

  useEffect(() => {
    fetch(environment.URL_API + '/api/roomTypes')
      .then(res => res.json())
      .then(data => {
        console.log("data: ", data)
        setTiposHabitacion(data)
      })
      .catch(err => console.log(err))

    fetch(environment.URL_API + '/api/accomodations')
      .then(res => res.json())
      .then(data => {
        console.log("data: ", data)
        setAcomodaciones(data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(formData.acomodacion_id >= 0 && formData.tipo_habitacion_id >= 0 && formData.cantidad > 0)) return

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(environment.URL_API + "/api/rooms", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
        onSubmit()
      })
      .catch((error) => console.error(error));

  }

  return (
    <form action="" onSubmit={handleSubmit} className="border border-gray-200 shadow-lg rounded-2xl p-4">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="font-semibold text-2xl text-[#DE3151]">Formulario Habitación</h2>

        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8">
          <div className="">
            <label htmlFor="cantidad" className="block text-sm/6 font-medium text-gray-900">Cantidad</label>
            <div className="mt-2">
              <input type="text" value={formData.cantidad} onChange={handleChange} name="cantidad" id="cantidad" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#de3140] sm:text-sm/6" />
            </div>
          </div>

          <div className="">
            <label htmlFor="tipo_habitacion_id" className="block text-sm/6 font-medium text-gray-900">Tipo Habitacion</label>
            <Select items={tiposHabitacion.map(th => ({ label: th.nombre, value: th.id }))} name={'tipo_habitacion_id'} onChange={handleChange} />
          </div>

          <div className="">
            <label htmlFor="acomodacion_id" className="block text-sm/6 font-medium text-gray-900">Acomodación</label>
            <Select items={acomodaciones.map(a => ({ label: a.nombre, value: a.id }))} name={'acomodacion_id'} onChange={handleChange} />
          </div>

        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
        <button type="submit" className="rounded-md cursor-pointer bg-[#DE3151] px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#de3140] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#de3140]">Save</button>
      </div>


    </form>
  )
}