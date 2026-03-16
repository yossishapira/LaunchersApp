import React, { useEffect, useState } from 'react'
import { getAllLaunchers } from '../api/client'
export default function HomePage() {
    const [launchers, setLaunchers] = useState([])
    const [citiSearch, setCitiSearch] = useState('')
    const [rocketTypeSearch, setRocketTypeSearch] = useState('')
    useEffect(() => {
        getAllLaunchers()
    }, [])
    return (
        <div>

        </div>
    )
}
