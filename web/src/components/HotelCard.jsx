import { useEffect } from "react"
import { Link } from "wouter";

export default function HotelCard({ hotel, onDelete }) {

  const handleDelete = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: "DELETE",
    };

    fetch("http://localhost:8000/api/hotels/" + hotel.id, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
        onDelete(hotel)
      })
      .catch((error) => console.error(error));
  }

  return (
    <Link href={"/detail/" + hotel.id}>
      <div className="py-6 lg:flex gap-6">
        <img className="w-[300px] min-h-[200px] aspect-video shadow-lg object-cover rounded-lg" src="hotel.png" alt="hotel" />
        <div className="flex-1 relative">
          <div className="absolute right-0 top-0 mt-1 mr-1 flex gap-2">
            <button className="cursor-pointer active:bg-slate-300/20 transition-colors rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
            </button>

            <button className="cursor-pointer active:bg-slate-300/20 transition-colors rounded-full p-2" onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            </button>
          </div>
          <h3 className="text-gray-500">{hotel.ciudad}</h3>
          <h2 className="text-gray-700 text-2xl">{hotel.nombre}</h2>
          <div className="my-4">
            <div className="w-10 h-[1px] bg-gray-200"></div>
            <p className="my-4">{hotel.nit} NIT · {hotel.max_habitaciones} rooms</p>
            <div className="w-10 h-[1px] bg-gray-200"></div>
          </div>
          <div className="flex justify-between">
            <div className="inline-flex items-center gap-2">
              5.0
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00001 0.958374L8.45834 5.54171H13.0417L9.29168 8.45837L10.5417 13.0417L7.00001 10.125L3.45834 13.0417L4.70834 8.45837L0.958344 5.54171H5.54168L7.00001 0.958374Z" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              (318 reviews)
            </div>
            <div className="">
              <b>$325</b>
              /night
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}