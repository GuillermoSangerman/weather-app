import { useEffect, useState } from 'react'

export async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}

export function useData(url) {

    const [data, setData] = useState({});
    useEffect(() => {
        fetchData(url)
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [url])

    return {
        data
    }
}