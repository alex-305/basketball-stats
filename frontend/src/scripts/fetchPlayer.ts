import SERVER_URL from "./server"

export async function fetchPlayerSeasons(id:string) {
    const response = await fetch(SERVER_URL+'/player/'+ id +'/seasons')
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    console.log(response)
    return await response.json()
}

export async function fetchPlayer(id:string) {
    const response = await fetch(SERVER_URL+'/player/'+ id)
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    console.log(response)
    return await response.json()
}

export async function fetchRandPlayers() {
    const response = await fetch(SERVER_URL+'/rand/players')
    if(!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}