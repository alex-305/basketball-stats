import { useParams } from "react-router-dom"
import TeamCard from "../components/TeamCard"
import TeamSeasonsTable from "../components/TeamSeasons"

function Team() {
    const { id } = useParams()
    return (
        <>
        <TeamCard id={id as string}/>
        <TeamSeasonsTable id={id as string}/>
        </>
    )
}

export default Team