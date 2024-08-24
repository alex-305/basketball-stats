package models

type PlayerWithAvgs struct {
	ID              string
	Name            string
	StealsPerGame   *float32
	BlocksPerGame   *float32
	ReboundsPerGame *float32
	AssistsPerGame  *float32
	PointsPerGame   *float32
	StartYear       int
	EndYear         int
	GamesPlayed     int
}
