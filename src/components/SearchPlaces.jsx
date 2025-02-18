import React from 'react'
import { useState } from 'react';

export function SearchPlaces() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className='flex justify-around gap-2 py-8 bg-[#1E213A] '>
                <button onClick={toggleSidebar} type='button' className='w-36 h-9 bg-[#6E707A] cursor-pointer text-center xl:w-44' >Search for Places</button>
                <button type='button' className='bg-gray-600 rounded-full w-9 p-1.5'>
                    <img src="./icons/location.svg" alt="icono de busqueda" />
                </button>
            </div>
            <div className={`fixed top-0 left-0 w-full md:w-[30%] h-full bg-[#1E213A] text-white transform transition-transform duration-300 z-50 ${isSidebarOpen ? '-translate-x-0' : '-translate-x-full'
                }`}>
                <div className='w-full h-screen'>
                    <div className='flex justify-around pt-15'>
                        <div className='flex border w-60 ps-2'>
                            <label className='pt-1' htmlFor="searched"> <img width={30} src="./icons/search.svg" alt="icono de busqueda" />
                            </label>
                            <input
                                id='searched'
                                className='w-[100%] h-9 cursor-pointer ps-2 outline-none'
                                type="search" placeholder='Search location' />
                        </div>
                        <button className='bg-blue-700 font-semibold w-auto px-3'>
                            Search
                        </button>
                    </div>
                    <ul className='mt-8 ps-7'>
                        <li className='text-2xl my-10'>Puebla, MX</li>
                        <li className='text-2xl my-10'>Puebla, MX</li>
                        <li className='text-2xl my-10'>Puebla, MX</li>
                    </ul>
                </div>
                <button onClick={toggleSidebar} className="absolute top-3 right-6 text-gray-400 hover:text-white">
                    <img width={30} src="./icons/close.svg" alt="icono de busqueda" />
                </button>
            </div>
        </>
    )
}
