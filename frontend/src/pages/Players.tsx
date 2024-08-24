import { useEffect, useState } from "react"
import StatsTable from "../components/StatsTable"
import { PlayerWithAvgs } from "../types/Player"
import { GetBGColorOfTable } from "../scripts/misc"
import { fetchRandPlayers } from "../scripts/fetchPlayer"
import Icon from '@mdi/react'
import { mdiReplay } from '@mdi/js'

function Players() {
    const labels = ["Name", "Active Year(s)", "Games Played", "Steals", "Blocks", "Rebounds", "Assists", "Points"]
    const [ players, setPlayers ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    async function fetch() {
        try {
            const res = await fetchRandPlayers()
            setPlayers(res)
        } catch(err:any) {
            console.error(err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetch()
        document.title = "Players"
    }, [])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    function Randomize() {
        return (
            <button onClick={()=> fetch()} className="flex px-0 py-0 mx-0 my-0">
                <Icon className="flex align-center" path={mdiReplay} size={1}/>
                <span>Randomize</span>
            </button>
        )
    }

    const formatYearRange = (start:string, end:string) => {
        const endLast = end.slice(2,4)
        if(start.slice(0,2)==end.slice(0,2)) {
            if(start.slice(2,4)==endLast) {
                return start
            }
            return start+"-"+endLast
        } else {
            return start+"-"+end
        }

    }

    return (
        <>
            <StatsTable labels={labels} header={Randomize()}>
            {players && players.map((item:PlayerWithAvgs, index:number) => (
                <tr key={item.ID} className={GetBGColorOfTable(index+1)}>
                    <th>
                        <a 
                    href={"/player/"+item.ID}>{item.Name}
                    </a></th>
                    <th>{formatYearRange(item.StartYear.toString(), item.EndYear.toString())}</th>
                    <th>{item.GamesPlayed}</th>
                    <th>{item.StealsPerGame ? item.StealsPerGame.toFixed(1) : "--"}</th>
                    <th>{item.BlocksPerGame ? item.BlocksPerGame.toFixed(1) : "--"}</th>
                    <th>{item.ReboundsPerGame ? item.ReboundsPerGame.toFixed(1) : "--"}</th>
                    <th>{item.AssistsPerGame ? item.AssistsPerGame.toFixed(1) : "--"}</th>
                    <th>{item.PointsPerGame ? item.PointsPerGame.toFixed(1) : "--"}</th>
                </tr>
            ))}
            </StatsTable>
        </>
    )
}

export default Players