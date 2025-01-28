import { useEffect } from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import HotelForm from "../components/HotelForm";
import HotelCard from "../components/HotelCard";
import Main from "../layouts/Main";
import { environment } from '../configuration/environment'

export default function Home() {
  const [hotels, setHotels] = useState([])
  const [action, setAction] = useState(false);

  useEffect(() => {
    setHotels([])
    fetch(environment.URL_API + '/api/hotels')
      .then(res => res.json())
      .then(data => {
        console.log("data: ", data)
        setHotels(data)
      })
      .catch(err => console.log(err))
  }, [action]);

  return (
    <>
      <div className="grid sm:grid-cols-12 py-8">
        <div className="sm:col-span-6 lg:col-span-4 px-6">
          <HotelForm onSubmit={() => setAction(prev => !prev)} />
        </div>

        <div className="sm:col-span-6 lg:col-span-8 px-10">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onDelete={(hotel) => {
              setHotels(hotels => hotels.filter(h => h.id !== hotel.id))
            }} />
          ))}
        </div>
      </div>
    </>
  )
}