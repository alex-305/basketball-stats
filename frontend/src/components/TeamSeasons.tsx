import { useEffect, useState } from "react"
import SERVER_URL from "../scripts/server"
import type TeamSeason from "../types/TeamSeason"

export type TeamSeasonsTableProps = {
    id:string
}

function TeamSeasonsTable(props:TeamSeasonsTableProps) {

    const getBGColor = (year:string) => {
        const gradient = "bg-gradient-to-r"
        return gradient + (parseInt(year) % 2 === 0 ?
         ' from-sky-100 to-stone-100 ' : 
         ' from-red-100 to-amber-100 ')
    }

    const labels = ["Team","Year", "Wins", "Losses"]

    const [seasons, setSeasons] = useState<TeamSeason[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchSeasons() {
            try {
                const response = await fetch(SERVER_URL+'/team/'+ props.id +'/seasons')
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                console.log(response)
                const data = await response.json()
                setSeasons(data)

            } catch(err:any) {
                setError(err.message)
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchSeasons()
    }, [])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    return (
        <table className="rounded shadow-xl mb-10 mx-10">
            <thead>
                <tr className="bg-gradient-to-r from-cyan-500 to-blue-500">
                    {labels.map((item) => (
                    <th className="px-5 py-2 text-white text-mono text-shadow-sm">{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            
            {seasons ? seasons.map((season:TeamSeason) => (
                <tr key={season.Year} className={getBGColor(season.Year)}>
                    <th>{season.TeamID}</th>
                    <th>{season.Year}</th>
                    <th>{season.Wins}</th>
                    <th>{season.Losses}</th>
                </tr>
            )) 
            : <></>}
            </tbody>
        </table>
    )
}

export default TeamSeasonsTable