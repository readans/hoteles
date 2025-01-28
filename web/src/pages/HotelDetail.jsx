import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "wouter"
import HabitacionForm from "../components/HabitacionForm";
import { environment } from "../configuration/environment";

const HabitacionCard = ({ habitacion, onDelete }) => {

  const handleDelete = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: "DELETE",
    };

    fetch(environment.URL_API + "/api/rooms/" + habitacion.id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        onDelete(habitacion)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 relative">
      <div className="absolute right-0 top-0 mt-1 mr-1">
        <button className="cursor-pointer active:bg-slate-300/20 transition-colors rounded-full p-2" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Tipo: {habitacion.tipo_habitacion.nombre}
            </h3>
            <p className="text-gray-600">
              <strong>Acomodación:</strong> {habitacion.acomodacion.nombre}
            </p>
            <p className="text-gray-500 mt-3 text-sm">
              ID de habitación: {habitacion.id}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="text-2xl font-medium">{habitacion.cantidad}</label>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bed size-10"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M22 17v-3h-20" /><path d="M2 8v9" /><path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" /></svg>
            </div>
            <p>Habitaciones</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default function HotelDetail() {

  const [action, setAction] = useState(false);

  const { id } = useParams()

  const [hotel, setHotel] = useState()
  const [habitaciones, setHabitaciones] = useState([])

  useEffect(() => {
    fetch(environment.URL_API + '/api/hotels/' + id)
      .then(res => res.json())
      .then(data => {
        console.log("data: ", data)
        setHotel(data)
        setHabitaciones(data.habitaciones)
      })
      .catch(err => console.log(err))
  }, [action]);

  return (
    <>
      {hotel ? (
        <div className="py-8">
          <h1 className="font-medium text-3xl my-4">{hotel.nombre}</h1>
          <img className="w-full rounded-t-2xl object-cover aspect-[3/1]" src="/hotel.jpg" alt="" />

          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-4">
              <HabitacionForm hotel={hotel} onSubmit={() => setAction(prev => !prev)} />
            </div>
            <div className="col-span-8 flex flex-col gap-2">
              {habitaciones.map(habitacion => <HabitacionCard key={habitacion.id} habitacion={habitacion} onDelete={(h) => {
                setHabitaciones(habitaciones => habitaciones.filter(hab => h.id !== hab.id))
              }} />)}
            </div>
          </div>

        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  )

}