import React from 'react'

export function Weather() {
    return (
        <>
            <div className='flex flex-col bg-[#1E213A] '>
                <div className='flex flex-col items-center w-full' >
                    <div className='flex items-center justify-center relative bg-[#1E213A] '>
                        <img className='opacity-5' src="./others/Cloud-background.png" alt="nubes" />
                        <div className='absolute'>
                            <img className='xl:hidden' width={130} src="./weather/10d.png" alt="imagen de clima" />
                            <img className='hidden xl:block' src="./weather/10d.png" alt="imagen de clima" />
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
        </>
    )
}
