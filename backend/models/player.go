package models

type Player struct {
	ID       string
	Name     string
	Birthday string
	Seasons  []PlayerSeason
}
