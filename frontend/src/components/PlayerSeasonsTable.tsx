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

    const isFirstDuplicate = (year:string) => {
        let firstDupe = seenYears && dupYears
        if(firstDupe) {
            seenYears.delete(year)
            return { backgroundColor: 'grey' }
        }
        return {}
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Team</th>
                    <th>SPG</th>
                    <th>BPG</th>
                    <th>RPG</th>
                    <th>APG</th>
                    <th>PPG</th>
                </tr>
            </thead>
            <tbody>
            {props.seasons.map((item:PlayerSeason, ) => (
                <tr key={item.Year+item.TeamID} style={isFirstDuplicate(item.Year)}>
                    <th>{item.Year}</th>
                    <th>{item.TeamID ? item.TeamID : "TOT"}</th>
                    <th>{item.StealsPerGame}</th>
                    <th>{item.BlocksPerGame}</th>
                    <th>{item.ReboundsPerGame}</th>
                    <th>{item.AssistsPerGame}</th>
                    <th>{item.PointsPerGame}</th>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default PlayerSeasonsTable