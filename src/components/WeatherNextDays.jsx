import React, { useContext, useState } from 'react'
import { HigthLights } from './HigthLights'
import { WeatherContext } from './ProvideContext'
export function WeatherNextDays() {

  const { nextDays, celcios, fare, celci, faren, cityWeather } = useContext(WeatherContext)
  const rs = [];
  const current = new Date()

  const exist = (item) => rs.some((weather) => {
    const date = new Date(weather.dt * 1000)
    const current = new Date(item.dt * 1000)
    return current.getDate() === date.getDate()
  })

  nextDays.forEach(item => {
    const date = new Date(item.dt * 1000)
    if (
      ((current.getDate() < date.getDate()) ||
        (current.getMonth() < date.getMonth())
      ) && !exist(item)
    ) {
      rs.push(item)
    }
  });

  function theDay(day) {
    const date = new Date(day * 1000)
    return date
  }


  return (
    <>
      <div className='bg-[#100E1D]'>
        <div className='flex justify-end gap-4 pt-10 w-[90%] md:pt-1 xl:w-[89%]'>
          <button onClick={()=> celci()} className='w-12 h-12 text-[24px] bg-white text-black font-medium cursor-pointer text-center rounded-full'  >&deg;C</button>
          <button onClick={()=> faren()} className='w-12 h-12 text-[24px] bg-[#6E707A] font-medium cursor-pointer text-center rounded-full'  >&deg;F</button>
        </div>
        {cityWeather &&
          celcios &&
        
          <div className='grid grid-cols-2  mt-6 gap-6 px-10 text-center md:grid-cols-4 md:px-4 md:gap-3 
        xl:grid-cols-5 xl:px-35 xl:gap-6'>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'>Tomorrow</h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[0].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[0].main.temp_min - 273.15).toFixed(0)} &deg;C</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[0].main.temp_max - 273.15).toFixed(0)} &deg;C</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'>
                <input className='w-[73%] h-9 xl:w-[61%] xl:text-[20px]'
                  value={theDay(rs[1].dt)} type="text" disabled />
              </h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[1].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[1].main.temp_min - 273.15).toFixed(0)} &deg;C</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[1].main.temp_max - 273.15).toFixed(0)} &deg;C</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'>
                <input className='w-[75%] h-9 xl:w-[61%] xl:text-[19px]'
                  value={theDay(rs[2].dt)} type="text" disabled />
              </h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[2].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[2].main.temp_min - 273.15).toFixed(0)} &deg;C</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[2].main.temp_max - 273.15).toFixed(0)} &deg;C</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'>
                <input className='w-[80%] h-9 xl:w-[61%] xl:text-[19px]'
                  value={theDay(rs[3].dt)} type="text" disabled />
              </h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[3].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[3].main.temp_min - 273.15).toFixed(0)} &deg;C</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[3].main.temp_max - 273.15).toFixed(0)} &deg;C</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'><input className='w-[75%] h-9 xl:w-[61%] xl:text-[20px]'
                value={theDay(rs[4].dt)} type="text" disabled /></h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[4].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[4].main.temp_min - 273.15).toFixed(0)} &deg;C</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[4].main.temp_max - 273.15).toFixed(0)} &deg;C</span>
              </div>
            </div>

          </div>}
        {cityWeather &&
        fare &&
          <div className='grid grid-cols-2  mt-6 gap-6 px-10 text-center md:grid-cols-4 md:px-4 md:gap-3 
        xl:grid-cols-5 xl:px-35 xl:gap-6'>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'>Tomorrow</h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[0].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[0].main.temp_min * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[0].main.temp_max * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'>
                <input className='w-[73%] h-9 xl:w-[61%] xl:text-[20px]'
                  value={theDay(rs[1].dt)} type="text" disabled />
              </h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[1].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[1].main.temp_min * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[1].main.temp_max * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'>
                <input className='w-[75%] h-9 xl:w-[61%] xl:text-[19px]'
                  value={theDay(rs[2].dt)} type="text" disabled />
              </h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[2].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[2].main.temp_min * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[2].main.temp_max * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'>
                <input className='w-[80%] h-9 xl:w-[61%] xl:text-[19px]'
                  value={theDay(rs[3].dt)} type="text" disabled />
              </h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[3].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[3].main.temp_min * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[3].main.temp_max * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
              <h2 className='text-2xl md:text-[15px] xl:text-2xl'><input className='w-[75%] h-9 xl:w-[61%] xl:text-[20px]'
                value={theDay(rs[4].dt)} type="text" disabled /></h2>
              <img className='mt-1 xl:mt-5' width={60} src={`./weather/${rs[4].weather[0].icon}.png`} alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-2 xl:my-5'>
                <span className='text-[24px] md:text-[15px] xl:text-2xl' >{(rs[4].main.temp_min * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
                <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>
                  {(rs[4].main.temp_max * 9 / 5 - 459.67).toFixed(0)} &deg;F</span>
              </div>
            </div>

          </div>}
        <div className='mt-15 md:my-7'>
          <h2 className='ps-10 text-2xl font-semibold xl:text-4xl xl:ps-35'>Today's Hightlights</h2>
          <HigthLights />
        </div>
        <div className='mt-5 pb-5 flex justify-center'>
          <p className='text-[#A09FB1]'>Created by
            <span className='font-semibold text-[#A09FB1]'> GuillermoSangerman</span>  ❤️</p>
        </div>
      </div>
    </>
  )
}
