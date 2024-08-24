import SERVER_URL from "./server";

export async function fetchRandPlayerSeasons() {
    try {
        const data = await fetch(SERVER_URL+'/rand/player/seasons')
        console.log(data)
        return data.json()
    } catch(err) {
        console.error(err)
    }
}