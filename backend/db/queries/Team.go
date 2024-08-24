package queries

const Team = `SELECT id, name FROM teams WHERE id=$1`

const RandTeam = `SELECT id, name, SUM(wins), SUM(losses), COUNT(*) FROM teams t JOIN team_seasons ts ON t.id=ts.teamid GROUP BY t.id ORDER BY MIN(year)`
