import { useEffect, useState } from "react"
import SERVER_URL from "../scripts/server"
import PlayerSeasonsTable from "./PlayerSeasonsTable"

function GuessingGame() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchRandPlayerSeasons() {
            try {
                const response = await fetch(SERVER_URL+'/rand/player/seasons')
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                console.log(response)
                const data = await response.json()
                setData(data)

            } catch(err:any) {
                setError(err.message)
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchRandPlayerSeasons()
    }, [])
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    return (
        <>
        <div className="px-20">
            <PlayerSeasonsTable seasons={data}/>
        </div>
        </>
    )
}


export default GuessingGame