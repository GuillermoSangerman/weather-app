import React, { useContext } from 'react'
import { WeatherContext } from './useContext'

export function HigthLights() {

  const { cityWeather } = useContext(WeatherContext)

  return (
    <>
      {cityWeather &&
        <div className='grid grid-cols-1 gap-5 px-10 md:px-5 md:grid-cols-2 xl:px-35 xl:gap-8'>
        <div className='bg-[#1E213A] mt-5 pt-3 flex flex-col items-center'>
          <h3 className='text-[#A09FB1] text-2xl md:text-[1rem] xl:text-2xl'>Wind status</h3>
          <p className='text-7xl font-semibold my-6 md:text-5xl xl:text-7xl'>
            {cityWeather.list[0].wind.speed}
            <span className='align-top text-5xl font-normal'>ms</span></p>
          <div className='flex justify-center items-center gap-4 pb-6 md:pb-3'>
            <img className='bg-[#6E707A] rounded-full p-2' src="./icons/navigation.svg" alt="flecha indicativa" />
            <span className='text-[#A09FB1] font-semibold'>ENE</span>
          </div>
        </div>
        <div className='bg-[#1E213A] pt-3 pb-4 flex flex-col items-center md:mt-5'>
          <h3 className='text-[#A09FB1] text-2xl md:text-[1rem] xl:text-2xl'>Humidity</h3>
          <p className='text-7xl font-semibold my-6 md:text-5xl xl:text-7xl'>
            {cityWeather.list[0].main.humidity}
            <span className='align-top text-5xl font-normal text-[#A09FB1]'>%</span></p>
          <label className='flex justify-between w-[70%] text-[#A09FB1] text-[12px] font-semibold' htmlFor="progress">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </label>
          <progress id='progress' className='w-[70%] py-1'
           value={cityWeather.list[0].main.humidity} 
           max={100}></progress>
          <span className='text-end w-[70%] text-[#A09FB1]' >%</span>
        </div>
        <div className='bg-[#1E213A] pt-3 pb-4 flex flex-col items-center'>
          <h3 className='text-[#A09FB1] text-2xl md:text-[1rem] xl:text-2xl'>Visibility</h3>
          <span className='text-7xl font-bold my-6 md:text-5xl xl:text-7xl'>
            {cityWeather.list[0].visibility / 1000}
            <span className='align-top text-5xl font-normal text-[#A09FB1]'>Km</span></span>
        </div>
        <div className='bg-[#1E213A] pt-3 pb-4 flex flex-col items-center'>
          <h3 className='text-[#A09FB1] text-2xl md:text-[1rem] xl:text-2xl'>Air Pressure</h3>
          <span className='text-7xl font-bold my-6 md:text-5xl xl:text-7xl'>
            {cityWeather.list[0].main.pressure}
            <span className='align-top text-5xl font-normal text-[#A09FB1]'>mb</span>
          </span>
        </div>
      </div>
      }
    </>
  )
}
