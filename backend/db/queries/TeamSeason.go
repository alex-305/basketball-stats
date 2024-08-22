package queries

const selectTeamSeasons = "SELECT teamid, year, wins, losses "
const fromTeamSeasons = " FROM team_seasons "
const TeamSeasons = selectTeamSeasons + fromTeamSeasons + "WHERE teamid=$1"

const RandTeamSeasons = selectTeamSeasons + fromTeamSeasons +
	` WHERE playerid=(SELECT p.id FROM player_seasons s JOIN players p ON p.id=s.playerid GROUP BY p.id HAVING COUNT(DISTINCT year)>16 ORDER BY RANDOM() LIMIT 1) ORDER BY year;`
