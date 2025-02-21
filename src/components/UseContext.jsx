import React, { createContext, use, useEffect, useState } from 'react'
import { fetchData } from '../hooks/fetchData'
export const WeatherContext = createContext()

export function UseContext({ children }) {
    const [countries, setCountries] = useState([])
    const [cityWeather, setCityWeather] = useState(null)
    const [nextDays, setNextDays] = useState([])
    const [search, setSearch] = useState("Agua%20Prieta")
    const [icon, setIcon] = useState('')
    const [celcios, setCelcios] = useState([])
    const [fare, setFare] = useState(null)

    const urlCities = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=3&appid=c35ae5d44c1e69f93ae25f9fc55de5a4`//&lang=es

    const urlforecast = `http://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=c35ae5d44c1e69f93ae25f9fc55de5a4`//&lang=es

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
    }, [])

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


    const kelvinACelsius = 273.15
    const kelvinAFahrenheit = 274.24 * 9 / 5 - 459.67
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
                getLocation

            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}
