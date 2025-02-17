import React from 'react'

export default function App() {
  return (
    <>
      <div className='text-white'>
        <div className='flex flex-col bg-[#1E213A]'>
          <div className='flex justify-around gap-2 mt-8'>
            <input
              className='w-44 h-9 bg-[#6E707A] cursor-pointer text-center'
              type="search" placeholder='Search for Places' />
            <button className='bg-gray-600 rounded-full w-9 p-1.5'>
              <img src="./icons/location.svg" alt="icono de busqueda" />
            </button>
          </div>
          <div className='flex flex-col items-center w-full ' >
            <div className='flex items-center justify-center relative'>
              <img className='opacity-5' src="./others/Cloud-background.png" alt="nubes" />
              <div className='absolute'>
                <img src="./weather/10d.png" alt="imagen de clima" />
              </div>
            </div>
            <span className='text-8xl mt-10 font-semibold opacity-85'>
              58<span className='text-7xl font-normal opacity-60'>&deg;C</span>
            </span>
            <span className='mt-10 text-3xl text-[#A09FB1] font-semibold capitalize'>Ligth Rain</span>
            <p className='text-[14px] text-[#A09FB1] font-semibold mt-10 capitalize opacity-85'>
              Today &nbsp;&nbsp; - &nbsp;&nbsp; Mon, 17 feb</p>
            <div className='flex mt-6 mb-5'>
              <img src="./icons/location_on.svg" alt="icono location" />
              <p className='text-[14px] text-[#A09FB1] font-semibold capitalize opacity-85 ms-2 '>puebla</p>
            </div>
          </div>
        </div>
        <div className='bg-[#100E1D]'>
          <div className='flex justify-end gap-4 pt-10 w-[90%]'>
            <button className='w-12 h-12 text-[24px] bg-white text-black font-medium cursor-pointer text-center rounded-full'  >&deg;C</button>
            <button className='w-12 h-12 text-[24px] bg-[#6E707A] font-medium cursor-pointer text-center rounded-full'  >&deg;F</button>
          </div>
          <div className='grid grid-cols-2 mt-6 gap-6 px-10 text-center'>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center'>
              <h2 className='text-2xl'>Tomorrow</h2>
              <img className='mt-5' width={80} src="./weather/10d.png" alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-5'>
                <span className='text-[24px]' >24 &deg;C</span>
                <span className='text-[24px] text-[#A09FB1] font-semibold capitalize opacity-85'>10 &deg;C</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center'>
              <h2 className='text-2xl'>Tomorrow</h2>
              <img className='mt-5' width={80} src="./weather/10d.png" alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-5'>
                <span className='text-[24px]' >24 &deg;C</span>
                <span className='text-[24px] text-[#A09FB1] font-semibold capitalize opacity-85'>10 &deg;C</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center'>
              <h2 className='text-2xl'>Tomorrow</h2>
              <img className='mt-5' width={80} src="./weather/10d.png" alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-5'>
                <span className='text-[24px]' >24 &deg;C</span>
                <span className='text-[24px] text-[#A09FB1] font-semibold capitalize opacity-85'>10 &deg;C</span>
              </div>
            </div>
            <div className='flex flex-col bg-[#1E213A] pt-4 items-center'>
              <h2 className='text-2xl'>Tomorrow</h2>
              <img className='mt-5' width={80} src="./weather/10d.png" alt="imagen de clima" />
              <div className='flex gap-3 justify-center my-5'>
                <span className='text-[24px]' >24 &deg;C</span>
                <span className='text-[24px] text-[#A09FB1] font-semibold capitalize opacity-85'>10 &deg;C</span>
              </div>
            </div>

          </div>
          <div className='mt-15'>
            <h2 className='ps-10 text-2xl font-semibold'>Today's Hightlights</h2>
            <div className='grid grid-cols-1 gap-5 px-10'>
              <div className='bg-[#1E213A] mt-5 pt-3 flex flex-col items-center'>
                <h3 className='text-[#A09FB1] text-2xl'>Wind status</h3>
                <p className='text-7xl font-semibold my-6'>1.95<span className='align-top text-5xl font-normal'>ms</span></p>
                <div className='flex justify-center items-center gap-4 pb-6'>
                  <img className='bg-[#6E707A] rounded-full p-2' src="./icons/navigation.svg" alt="flecha indicativa" />
                  <span className='text-[#A09FB1] font-semibold'>ENE</span>
                </div>
              </div>
              <div className='bg-[#1E213A] pt-3 pb-4 flex flex-col items-center'>
                <h3 className='text-[#A09FB1] text-2xl'>Humidity</h3>
                <p className='text-7xl font-semibold my-6'>81
                  <span className='align-top text-5xl font-normal text-[#A09FB1]'>%</span></p>
                <label className='flex justify-between w-[70%] text-[#A09FB1] text-[12px] font-semibold' htmlFor="progress">
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                </label>
                <progress id='progress' className='w-[70%] py-1' value={60} max={100}></progress>
                <span className='text-end w-[70%] text-[#A09FB1]' >%</span>
              </div>
              <div className='bg-[#1E213A] pt-3 pb-4 flex flex-col items-center'>
                <h3 className='text-[#A09FB1] text-2xl'>Visibility</h3>
                <span className='text-7xl font-bold my-6'>10.00 
                  <span className='align-top text-5xl font-normal text-[#A09FB1]'>Km</span></span>
              </div>
              <div className='bg-[#1E213A] pt-3 pb-4 flex flex-col items-center'>
                <h3 className='text-[#A09FB1] text-2xl'>Air Pressure</h3>
                <span className='text-7xl font-bold my-6'>1021
                <span className='align-top text-5xl font-normal text-[#A09FB1]'>mb</span>
                </span>
              </div>
            </div>
          </div>
          <div className='mt-5 pb-5 flex justify-center'>
            <p className='text-[#A09FB1]'>Created by 
              <span className='font-semibold text-[#A09FB1]'> GuillermoSangerman</span>  ❤️</p>
          </div>
        </div>
      </div>
    </>
  )
}
