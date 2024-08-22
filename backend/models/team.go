package models

type Team struct {
	ID      string
	Name    string
	Seasons []TeamSeason
}

type TeamSeason struct {
	TeamID string
	Year   string
	Wins   int
	Losses int
}
