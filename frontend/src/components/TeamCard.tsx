import { useEffect, useState } from "react"
import type Team from "../types/Team"
import SERVER_URL from "../scripts/server"

export type TeamCardProps = {
    id:string
}

function TeamCard(props:TeamCardProps) {

    const [team, setTeam] = useState<Team | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchTeam() {
            try {
                const response = await fetch(SERVER_URL+'/team/'+ props.id)
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                console.log(response)
                const data = await response.json()
                setTeam(data)

            } catch(err:any) {
                setError(err.message)
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchTeam()
    }, [])

    useEffect(() => {
        document.title = team?.Name ?? "Hoop Swish"
    })

    return (
        <>
        <div className="text-center mx-auto text-2xl rounded w-fit 
        bg-gradient-to-r from-sky-300 to-stone-300 px-3 my-2 shadow-lg"
        >{team?.Name ?? ""}</div>
        </>
    )
}

export default TeamCard