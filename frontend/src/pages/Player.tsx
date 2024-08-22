import { useParams } from "react-router-dom"
import PlayerSeasonsTable from "../components/PlayerSeasonsTable"

function Player() {
    const { id } = useParams()
    console.log(id)

    return (
        <>
        <div className="">
            <PlayerSeasonsTable id={id as string}/>
        </div>
        </>
    )
}

export default Player