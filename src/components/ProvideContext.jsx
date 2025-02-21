import React, { createContext, use, useEffect, useState } from 'react'
export const WeatherContext = createContext()
const token = import.meta.env.VITE_API_KEY

export function ProvideContext({ children }) {
    const [countries, setCountries] = useState([])
    const [cityWeather, setCityWeather] = useState(null)
    const [nextDays, setNextDays] = useState([])
    const [search, setSearch] = useState("Agua%20Prieta")
    const [icon, setIcon] = useState('')
    const [celcios, setCelcios] = useState([])
    const [fare, setFare] = useState(null)
    const urlCities = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${token}`//&lang=es

    const urlforecast = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${token}`//&lang=es



    const getLocation = async () => {

        await fetch(urlCities)
            .then(response => {
                if (!response.ok) { response }
                return response.json()
            }).then((data) => {
                setCountries(data)
            })
            .catch(error => console.error(error))

        await fetch(urlforecast)
            .then(response => {
                if (!response.ok) { response }
                return response.json()
            }).then(data => {
                setCityWeather(data)
                setNextDays(data.list)
                setIcon(data.list[0].weather[0].icon)
            })
            .catch(error => console.error(error))

    }
    useEffect(() => {
        getLocation()
    }, [search])

    function getDate() {
        const now = new Date()
        let dia = now.getDay()
        let diasEspecifico = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = now.getDate()
        let month = now.getMonth()
        let monthEspecific = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let formatedDate = `${diasEspecifico[dia]} ${day} ${monthEspecific[month]}`
        return formatedDate
    }
    const celci = () => {
        setCelcios([])
        setFare(null)
    }
    const faren = () => {
        setCelcios(null)
        setFare([])
    }
    function geoFindMe() {
        const mapLink = document.querySelector("#map-link");

        mapLink.href = "";
        mapLink.textContent = "";

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${token}`)
                .then(response => response.json())
                .then(data => {
                    const nameCity = data.name;
                    console.log(nameCity);
                    setSearch(nameCity);
                })
                .catch(() => {
                    alert("Unable to retrieve city name");
                });
        }

        function error() {
            alert("Unable to retrieve your location");
        }

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                nextDays,
                celcios,
                fare,
                celci,
                faren,
                countries,
                setCountries,
                search,
                setSearch,
                cityWeather,
                getDate,
                icon,
                setCityWeather,
                getLocation,
                geoFindMe,
                

            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}
