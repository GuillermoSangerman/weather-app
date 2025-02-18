import React from 'react'
import { HigthLights } from './HigthLights'
export function WeatherNextDays() {
  return (
    <>
      <div className='bg-[#100E1D]'>
        <div className='flex justify-end gap-4 pt-10 w-[90%] md:pt-1 xl:w-[89%]'>
          <button className='w-12 h-12 text-[24px] bg-white text-black font-medium cursor-pointer text-center rounded-full'  >&deg;C</button>
          <button className='w-12 h-12 text-[24px] bg-[#6E707A] font-medium cursor-pointer text-center rounded-full'  >&deg;F</button>
        </div>
        <div className='grid grid-cols-2  mt-6 gap-6 px-10 text-center md:grid-cols-4 md:px-4 md:gap-3 
        xl:grid-cols-5 xl:px-35 xl:gap-6'>
          <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
            <h2 className='text-2xl md:text-[15px] xl:text-2xl'>Tomorrow</h2>
            <img className='mt-1 xl:mt-5' width={60} src="./weather/10d.png" alt="imagen de clima" />
            <div className='flex gap-3 justify-center my-2 xl:my-5'>
              <span className='text-[24px] md:text-[15px] xl:text-2xl' >24 &deg;C</span>
              <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>10 &deg;C</span>
            </div>
          </div>
          <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
            <h2 className='text-2xl md:text-[15px] xl:text-2xl'>Tomorrow</h2>
            <img className='mt-1 xl:mt-5' width={60} src="./weather/10d.png" alt="imagen de clima" />
            <div className='flex gap-3 justify-center my-2 xl:my-5'>
              <span className='text-[24px] md:text-[15px] xl:text-2xl' >24 &deg;C</span>
              <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>10 &deg;C</span>
            </div>
          </div>
          <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
            <h2 className='text-2xl md:text-[15px] xl:text-2xl'>Tomorrow</h2>
            <img className='mt-1 xl:mt-5' width={60} src="./weather/10d.png" alt="imagen de clima" />
            <div className='flex gap-3 justify-center my-2 xl:my-5'>
              <span className='text-[24px] md:text-[15px] xl:text-2xl' >24 &deg;C</span>
              <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>10 &deg;C</span>
            </div>
          </div>
          <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
            <h2 className='text-2xl md:text-[15px] xl:text-2xl'>Tomorrow</h2>
            <img className='mt-1 xl:mt-5' width={60} src="./weather/10d.png" alt="imagen de clima" />
            <div className='flex gap-3 justify-center my-2 xl:my-5'>
              <span className='text-[24px] md:text-[15px] xl:text-2xl' >24 &deg;C</span>
              <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>10 &deg;C</span>
            </div>
          </div>
          <div className='flex flex-col bg-[#1E213A] pt-4 items-center md:h-auto md:w-25 xl:w-auto'>
            <h2 className='text-2xl md:text-[15px] xl:text-2xl'>Tomorrow</h2>
            <img className='mt-1 xl:mt-5' width={60} src="./weather/10d.png" alt="imagen de clima" />
            <div className='flex gap-3 justify-center my-2 xl:my-5'>
              <span className='text-[24px] md:text-[15px] xl:text-2xl' >24 &deg;C</span>
              <span className='text-[24px] md:text-[15px] xl:text-2xl text-[#A09FB1] font-semibold capitalize opacity-85'>10 &deg;C</span>
            </div>
          </div>

        </div>
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
