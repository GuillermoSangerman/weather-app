import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { WeatherContext } from './ProvideContext';

export function SearchPlaces() {
    const { countries, setCountries, search, setSearch, setCityWeather, getLocation, geoFindMe } = useContext(WeatherContext)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(()=>{
        getLocation()
    }, [search])
    const [city, setCity] = useState('')
    function handleSearch() {
        setSearch(city)

    }
    function onChanges(e) {
        let target = e.target
        console.log(target);
        let id = parseInt(target.closest('p').id)
        console.log(id);
        
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='flex justify-around gap-2 py-8 bg-[#1E213A] '>
                <button onClick={toggleSidebar} type='button' className='w-36 h-9 bg-[#6E707A] cursor-pointer text-center xl:w-44' >Search for Places</button>
                <button onClick={geoFindMe} id='find-me' type='submit' className='bg-gray-600 rounded-full w-9 xl:w-12 p-1.5'>
                    <img src="./icons/location.svg" alt="icono de busqueda" />
                    <a id="map-link"></a>
                </button>
            </div>
            <div className={`fixed top-0 left-0 w-full md:w-[35%] h-full bg-[#1E213A] text-white transform transition-transform duration-300 z-50 ${isSidebarOpen ? '-translate-x-0' : '-translate-x-full'
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
                                onChange={(e)=> setCity(e.target.value)} />
                        </div>
                        <button onClick={handleSearch} className='bg-blue-700 cursor-pointer font-semibold w-auto px-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 '>
                            Search
                        </button>
                    </div>
                    <ul className='mt-8 ps-7'>
                        {countries &&
                            countries.map(country =>
                                <li onClick={onChanges} key={country.id} className='text-2xl my-10 w-[80%] cursor-pointer transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 '>
                                    <p  id={country.id}>{country.name}, {country.country}</p>
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
