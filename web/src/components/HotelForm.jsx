import { useState } from "react";

export default function HotelForm({ onSubmit }) {

  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    nit: "",
    max_habitaciones: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(formData.nombre.length > 0 && formData.direccion.length > 0 && formData.ciudad.length > 0 && formData.nit.length > 0 && formData.max_habitaciones > 0)) return

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:8000/api/hotels", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
        onSubmit()
      })
      .catch((error) => console.error(error));

  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="font-semibold text-2xl text-[#DE3151]">Formulario Hotel</h2>
        <p className="mt-1 text-sm/6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, in?</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">Nombre</label>
            <div className="mt-2">
              <input type="text" value={formData.nombre} onChange={handleChange} name="nombre" id="name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#de3140] sm:text-sm/6" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Dirección</label>
            <div className="mt-2">
              <input type="text" value={formData.direccion} onChange={handleChange} name="direccion" id="address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#de3140] sm:text-sm/6" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Ciudad</label>
            <div className="mt-2">
              <input type="text" value={formData.ciudad} onChange={handleChange} name="ciudad" id="city" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#de3140] sm:text-sm/6" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">NIT</label>
            <div className="mt-2">
              <input type="text" value={formData.nit} onChange={handleChange} name="nit" id="tax-id" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#de3140] sm:text-sm/6" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">máx. habitaciones</label>
            <div className="mt-2">
              <input type="number" value={formData.max_habitaciones} onChange={handleChange} name="max_habitaciones" id="max-rooms" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#de3140] sm:text-sm/6" />
            </div>
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