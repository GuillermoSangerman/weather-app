import React from 'react'
import { useState, useEffect } from 'react';
import { success, error, options } from '../hooks/utils';
import { fetchData } from '../hooks/fetchData';

export function SearchPlaces() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [countries, setCountries] = useState(null)
    const [search, setSearch] = useState("")
    console.log(countries);
    useEffect(() => {
        fetchData("static_Json/cities.json")
          .then(data => setCountries(data))
          .catch(error => console.error(error))
      }, [search])

    const searcher = (e) => {
        setSearch(e.target.value)
    }
    function handleSearch() {
        const res = countries.filter(dato => search.toLowerCase() === dato.name.toLowerCase())
        setCountries(res)
        return;
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const watchID = ""
    function searchLocation(location) {
        location = navigator.geolocation.watchPosition(success, error, options);
    }
    return (
        <>
            <div className='flex justify-around gap-2 py-8 bg-[#1E213A] '>
                <button onClick={toggleSidebar} type='button' className='w-36 h-9 bg-[#6E707A] cursor-pointer text-center xl:w-44' >Search for Places</button>
                <button onClick={()=> searchLocation(watchID)} type='submit' className='bg-gray-600 rounded-full w-9 xl:w-12 p-1.5'>
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
                                type="search" 
                                placeholder='Search location'
                                value={search} 
                                onChange={searcher}  />
                        </div>
                        <button onClick={handleSearch} className='bg-blue-700 cursor-pointer font-semibold w-auto px-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 '>
                            Search
                        </button>
                    </div>
                    <ul className='mt-8 ps-7'>
                        {countries &&
                            countries.slice(0,3).map(country =>
                                <li key={country.id} className='text-2xl my-10 w-[80%] cursor-pointer transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 '>
                                    <p>{country.name}, {country.country_code}</p>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <button onClick={toggleSidebar} className="absolute top-3 right-6 text-gray-400 hover:text-white">
                    <img width={30} src="./icons/close.svg" alt="icono de busqueda" />
                </button>
            </div>
        </>
    )
}
