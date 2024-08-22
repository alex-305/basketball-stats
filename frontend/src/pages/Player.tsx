import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SERVER_URL from "../scripts/server"
import PlayerSeasonsTable from "../components/PlayerSeasonsTable"
import PlayerCard from "../components/PlayerCard"
import type { PlayerCardProps } from '../components/PlayerCard'

function Player() {
    const { id } = useParams()
    console.log(id)

    return (
        <>
        <div className="">
            <PlayerCard id={id as string}/>
            <PlayerSeasonsTable id={id as string}/>
        </div>
        </>
    )
}

export default Player