import Icon from "@mdi/react"
import { TeamWithStats } from "../types/Team"
import { mdiReplay } from "@mdi/js"
import { useEffect, useState } from "react"
import { fetchTeams } from "../scripts/fetchTeam"
import { GetBGColorOfTable } from "../scripts/misc"
import StatsTable from "../components/StatsTable"

function Teams() {
    const labels = ["Name", "Win%", "Wins", "Losses", "No. of Seasons"]
    const [ teams, setTeams ] = useState<TeamWithStats[]>([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    async function fetch() {
        try {
            const res = await fetchTeams()
            setTeams(res)
        } catch(err:any) {
            console.error(err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetch()
        document.title = "Teams"
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

    function WinLossPct(wins:number, losses:number):string {
        return ((wins/(losses+wins))*100).toFixed(1) + "%"
    }

    return (
        <>
            <StatsTable labels={labels} header={Randomize()}>
            {teams && teams.map((item:TeamWithStats, index:number) => (
                <tr key={item.ID} className={GetBGColorOfTable(index+1)}>
                    <th>
                        <a 
                    href={"/team/"+item.ID}>{item.Name}
                    </a></th>
                    <th>{WinLossPct(item.Wins, item.Losses)}</th>
                    <th>{item.Wins}</th>
                    <th>{item.Losses}</th>
                    <th>{item.SeasonCount}</th>
                </tr>
            ))}
            </StatsTable>
        </>
    )
}

export default Teams