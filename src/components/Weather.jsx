import React, { useContext } from 'react'
import { WeatherContext } from './ProvideContext'

export function Weather() {
    const { icon, cityWeather, getDate, celcios, fare } = useContext(WeatherContext)

    //console.log(cityWeather);

    const fechaActual = getDate()

    return (
        <>
            {cityWeather &&
                    <div className='flex flex-col bg-[#1E213A] '>
                    <div className='flex flex-col items-center w-full' >
                        <div className='flex items-center justify-center relative bg-[#1E213A] '>
                            <img className='opacity-5' src="./others/Cloud-background.png" alt="nubes" />
                            <div className='absolute'>
                                <img className='xl:hidden' width={130} src={`./weather/${icon}.png`} alt="imagen de clima" />
                                <img className='hidden xl:block' src="./weather/10d.png" alt="imagen de clima" />
                            </div>
                        </div>
                        {celcios &&
                        <span className='text-8xl mt-10 font-semibold opacity-85'>
                            {(cityWeather.list[0].main.temp - 273.15).toFixed(1)}
                             <span className='text-7xl font-normal opacity-60'>&deg;C</span>
                        </span>}
                        {fare &&
                        <span className='text-8xl mt-10 font-semibold opacity-85'>
                        {(cityWeather.list[0].main.temp * 9 / 5 - 459.67).toFixed(1)}
                         <span className='text-7xl font-normal opacity-60'>&deg;F</span>
                    </span>}
                        <span className='mt-10 text-3xl text-[#A09FB1] font-semibold capitalize'>
                            {cityWeather.list[0].weather[0].description}
                            </span>
                        <p className='text-[14px] text-[#A09FB1] font-semibold mt-10 capitalize opacity-85'>
                            Today &nbsp;&nbsp; - &nbsp;&nbsp; {fechaActual}</p>
                        <div className='flex mt-6 mb-5'>
                            <img src="./icons/location_on.svg" alt="icono location" />
                            <p className='text-[14px] text-[#A09FB1] font-semibold capitalize opacity-85 ms-2 '>
                                {cityWeather.city.name}
                                </p>
                        </div>
                    </div>
                </div>
                }
        </>
    )
}
