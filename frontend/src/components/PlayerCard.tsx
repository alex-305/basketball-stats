import { useEffect, useState } from "react"
import type Player from "../types/Player"
import SERVER_URL from "../scripts/server"

export type PlayerCardProps = {
    id:string
}

function PlayerCard(props:PlayerCardProps) {

    const [player, setPlayer] = useState<Player | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchPlayer() {
            try {
                const response = await fetch(SERVER_URL+'/player/'+ props.id)
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                console.log(response)
                const data = await response.json()
                setPlayer(data)

            } catch(err:any) {
                setError(err.message)
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPlayer()
    }, [])

    useEffect(() => {
        document.title = player?.Name ?? "Hoop Swish"
    })

    return (
        <>
        <div className="text-center mx-auto text-2xl rounded w-fit 
        bg-gradient-to-r from-sky-300 to-stone-300 px-3 my-2 shadow-lg"
        >{player?.Name ?? ""}</div>
        </>
    )
}

export default PlayerCard