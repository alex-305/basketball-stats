package queries

func PlayerSeasons() string {
	return "SELECT p.id, s.teamid, s.year, s.ppg, s.rpg, s.apg, s.spg, s.bpg FROM players p JOIN seasons s ON p.id=s.playerid WHERE p.id = $1;"
}
