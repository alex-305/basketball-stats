import Team from "../types/Team"
import TeamSeason from "../types/TeamSeason"
import SERVER_URL from "./server"

export async function fetchTeamSeasons(id:string):Promise<TeamSeason[]> {
    const response = await fetch(SERVER_URL+'/team/'+ id +'/seasons')
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    console.log(response)
    return await response.json()
}
export async function fetchTeam(id:string):Promise<Team> {
    const response = await fetch(SERVER_URL+'/team/'+id)
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    console.log(response)
    return await response.json()
}