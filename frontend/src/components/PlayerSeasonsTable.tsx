import { useEffect, useState } from "react"
import type PlayerSeason from "../types/PlayerSeason"
import StatsTable from "./StatsTable"
import Player from "../types/Player"
import { fetchPlayer, fetchPlayerSeasons } from "../scripts/fetchPlayer"
// import { fetchTeam } from "../scripts/fetchTeam"
// import Team from "../pages/Team"

export type PlayerSeasonsTable = {
    id:string
}

function PlayerSeasonsTable(props:PlayerSeasonsTable) {
    const seenYears = new Set()
    const dupYears = new Set()
    const [seasons, setSeasons] = useState<PlayerSeason[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function fetch() {
        try {
            const res = await fetchPlayerSeasons(props.id)
            setSeasons(res)
            const res2 = await fetchPlayer(props.id)
            setPlayer(res2)
        } catch(err:any) {
            console.error(err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetch()
        document.title = player?.Name ?? "Hoop Swish"
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

    const labels = ["Year", "Team", "Age", "Position", "GP", "Steals", "Blocks", "Rebounds", "Assists", "Points"]

    seasons.forEach((val:PlayerSeason) => {
        if(seenYears.has(val.Year)) {
            dupYears.add(val.Year)
        } else {
            seenYears.add(val.Year)
        }
    })

    const [player, setPlayer] = useState<Player | null>(null)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    return (
        <StatsTable 
            labels={labels}
            header={player?.Name ?? ""}>
            {seasons && seasons.map((item:PlayerSeason) => (
                <tr key={item.Year+item.TeamID} className={getBGColor(item.Year)}>
                    <td>{item.Year}</td>
                    <td>{item.TeamID}</td>
                    <td>{item.Age}</td>
                    <td>{item.Position}</td>
                    <td>{item.GamesPlayed}</td>
                    <td>{item.StealsPerGame ? item.StealsPerGame.toFixed(1) : "--"}</td>
                    <td>{item.BlocksPerGame ? item.BlocksPerGame.toFixed(1) : "--"}</td>
                    <td>{item.ReboundsPerGame ? item.ReboundsPerGame.toFixed(1) : "--"}</td>
                    <td>{item.AssistsPerGame ? item.AssistsPerGame.toFixed(1) : "--"}</td>
                    <td>{item.PointsPerGame ? item.PointsPerGame.toFixed(1) : "--"}</td>
                </tr>
            ))}
        </StatsTable>
    )
}

export default PlayerSeasonsTable