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

    function WinLossPct(wins:number, losses:number):string {
        return ((wins/(losses+wins))*100).toFixed(1) + "%"
    }

    return (
        <>
            <StatsTable labels={labels} header={<>Teams</>}>
            {teams && teams.map((item:TeamWithStats, index:number) => (
                <tr key={item.ID} className={GetBGColorOfTable(index+1)}>
                    <td>
                        <a 
                    href={"/team/"+item.ID}>{item.Name}
                    </a></td>
                    <td>{WinLossPct(item.Wins, item.Losses)}</td>
                    <td>{item.Wins}</td>
                    <td>{item.Losses}</td>
                    <td>{item.SeasonCount}</td>
                </tr>
            ))}
            </StatsTable>
        </>
    )
}

export default Teams