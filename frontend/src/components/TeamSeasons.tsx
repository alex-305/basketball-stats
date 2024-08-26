import { useEffect, useState } from "react"
import type TeamSeason from "../types/TeamSeason"
import StatsTable from "./StatsTable"
import Team from "../types/Team"
import { fetchTeam, fetchTeamSeasons } from "../scripts/fetchTeam"

export type TeamSeasonsTableProps = {
    id:string
}

function TeamSeasonsTable(props:TeamSeasonsTableProps) {

    const [seasons, setSeasons] = useState<TeamSeason[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [team, setTeam] = useState<Team | null>(null)

    async function fetch() {
        try {
            const res = await fetchTeamSeasons(props.id)
            setSeasons(res)
            const res2 = await fetchTeam(props.id)
            setTeam(res2)
        } catch(err:any) {
            console.error(err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetch()
        document.title = team?.Name ?? "Hoop Swish"
    }, [])

    useEffect(() => {
        fetch()
    }, [props.id])

    const getBGColor = (year:string) => {
        const gradient = "bg-gradient-to-r"
        return gradient + (parseInt(year) % 2 === 0 ?
         ' from-sky-100 to-stone-100 ' : 
         ' from-red-100 to-amber-100 ')
    }

    const labels = ["Team","Year", "Wins", "Losses"]

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    return (
        <>
            <StatsTable 
            labels={labels}
            header={team?.Name ?? ""}>
                {seasons && seasons.map((season:TeamSeason) => (
                    <tr key={season.Year} className={getBGColor(season.Year)}>
                        <td>{season.TeamID}</td>
                        <td>{season.Year}</td>
                        <td>{season.Wins}</td>
                        <td>{season.Losses}</td>
                    </tr>
                ))}
            </StatsTable>
        </>
    )
}

export default TeamSeasonsTable