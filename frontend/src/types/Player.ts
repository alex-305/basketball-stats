import PlayerSeason from "./PlayerSeason"

type Player = {
	ID:string
	Name:string
	Birthday:string
	Seasons:PlayerSeason[]
}

export type PlayerWithAvgs = {
	ID:string
	Name:string
	StealsPerGame:number
	BlocksPerGame:number
	ReboundsPerGame:number
	AssistsPerGame:number
	PointsPerGame:number
	StartYear:number
	EndYear:number
	GamesPlayed:number
}

export default Player
