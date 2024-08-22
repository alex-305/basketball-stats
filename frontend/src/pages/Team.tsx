import { useParams } from "react-router-dom"
import TeamSeasonsTable from "../components/TeamSeasons"

function Team() {
    const { id } = useParams()
    return (
        <>
        <TeamSeasonsTable id={id as string}/>
        </>
    )
}

export default Team