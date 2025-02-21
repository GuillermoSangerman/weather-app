import React from 'react'
import { Weather } from './components/Weather'
import { WeatherNextDays } from './components/WeatherNextDays'
import { SearchPlaces } from './components/SearchPlaces'
import { ProvideContext } from './components/ProvideContext'

export default function App() {
  return (
    <ProvideContext>
      <div className='text-white w-full h-full flex flex-col md:flex-row'>
        <div className='md:w-[35%] xl:w-[30%] '>
          <SearchPlaces />
          <Weather />
        </div>
        <div className='md:h-screen md:w-[65%] xl:w-[70%]'>
          <WeatherNextDays />
        </div>
      </div>
    </ProvideContext>
  )
}
