package queries

const SELECT = "SELECT playerid, teamid, year, ppg, rpg, apg, spg, bpg "
const PlayerSeasons = SELECT + "FROM players p JOIN seasons s ON p.id=s.playerid WHERE p.id = $1;"

const RandPlayerSeasons = SELECT +
	`FROM seasons WHERE playerid=
	(SELECT p.id FROM seasons s JOIN players p ON p.id=s.playerid GROUP BY p.id HAVING COUNT(*)>20 ORDER BY RANDOM() LIMIT 1) ORDER BY year;`
