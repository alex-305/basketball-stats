import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SERVER_URL from "../scripts/server"
import PlayerSeasonsTable from "../components/PlayerSeasonsTable"
import PlayerCard from "../components/PlayerCard"

function Player() {
    const { id } = useParams()

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchPlayer() {
            try {
                const response = await fetch(SERVER_URL+'/player/'+ id +'/seasons')
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
        fetchPlayer()
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

export default Player