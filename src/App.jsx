import React from 'react'
import { Weather } from './components/weather'
import { WeatherNextDays } from './components/WeatherNextDays'
import { SearchPlaces } from './components/SearchPlaces'

export default function App() {
  return (
    <>
      <div className='text-white w-full h-full flex flex-col md:flex-row'>
        <div className='md:w-[35%] xl:w-[30%] '>
          <SearchPlaces />
          <Weather />
        </div>
        <div className='md:h-screen md:w-[65%] xl:w-[70%]'>
          <WeatherNextDays />
        </div>
      </div>
    </>
  )
}

//d6189044ef41dcf7f29a11c63f14ed0a
// countries api: c35ae5d44c1e69f93ae25f9fc55de5a4