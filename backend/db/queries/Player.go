package queries

const Player = `SELECT id, name, birthday FROM players WHERE id=$1`

const RandPlayers = `SELECT id, name, AVG(spg), AVG(bpg), AVG(rpg), AVG(apg), AVG(ppg), MIN(year), MAX(year), SUM(gp) FROM players p JOIN player_seasons s ON p.id=s.playerid GROUP BY p.id ORDER BY RANDOM() LIMIT 20;`
