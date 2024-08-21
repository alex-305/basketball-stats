import type PlayerSeason from "../types/PlayerSeason"

function PlayerSeasonsTable(props:any) {
    const seenYears = new Set()
    const dupYears = new Set()

    props.seasons.forEach((val:PlayerSeason) => {
        if(seenYears.has(val.Year)) {
            dupYears.add(val.Year)
        } else {
            seenYears.add(val.Year)
        }
    })

    const getBGColor = (year:string) => {
        const gradient = "bg-gradient-to-r"
        return gradient + (parseInt(year) % 2 === 0 ?
         ' from-sky-100 to-stone-100 ' : 
         ' from-red-100 to-amber-100 ')
    }

    const labels = ["Year", "Team", "Age", "Position", "GP", "MP", "Steals", "Blocks", "Rebounds", "Assists", "Points"]

    return (
        <table className="rounded">
            <thead>
                <tr className="bg-gradient-to-r from-cyan-500 to-blue-500">
                    {labels.map((item) => (
                    <th className="px-5 py-2 text-white text-mono text-shadow-sm">{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {props.seasons.map((item:PlayerSeason, ) => (
                <tr key={item.Year+item.TeamID} className={getBGColor(item.Year)}>
                    <th>{item.Year}</th>
                    <th>{item.TeamID}</th>
                    <th>{item.Age}</th>
                    <th>{item.Position}</th>
                    <th>{item.GamesPlayed}</th>
                    <th>{item.MinutesPlayed}</th>
                    <th>{item.StealsPerGame.toFixed(1)}</th>
                    <th>{item.BlocksPerGame.toFixed(1)}</th>
                    <th>{item.ReboundsPerGame.toFixed(1)}</th>
                    <th>{item.AssistsPerGame.toFixed(1)}</th>
                    <th>{item.PointsPerGame.toFixed(1)}</th>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default PlayerSeasonsTable