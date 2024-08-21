package models

type PlayerSeason struct {
	TeamID          string
	PlayerID        string
	Year            string
	Position        string
	GamesPlayed     int
	Age             int
	MinutesPlayed   *float32
	PointsPerGame   *float32
	AssistsPerGame  *float32
	ReboundsPerGame *float32
	BlocksPerGame   *float32
	StealsPerGame   *float32
}
