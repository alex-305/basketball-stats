package queries

const SELECT = "SELECT playerid, teamid, year, ppg, rpg, apg, spg, bpg, position, mp, age, gp "
const PlayerSeasons = SELECT + "FROM players p JOIN player_seasons s ON p.id=s.playerid WHERE p.id = $1;"

const RandPlayerSeasons = SELECT +
	`FROM seasons WHERE playerid=(SELECT p.id FROM player_seasons s JOIN players p ON p.id=s.playerid GROUP BY p.id HAVING COUNT(DISTINCT year)>16 ORDER BY RANDOM() LIMIT 1) ORDER BY year;`
