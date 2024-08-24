package scan

import (
	"database/sql"

	"github.com/alex-305/basketball-stats/backend/models"
)

func Team(row *sql.Row) (models.Team, error) {
	team := models.Team{}
	err := row.Scan(&team.ID, &team.Name)
	return team, err
}

func TeamsWithStats(rows *sql.Rows) ([]models.TeamWithStats, error) {
	teams := []models.TeamWithStats{}
	for rows.Next() {
		var team models.TeamWithStats
		err := rows.Scan(&team.ID, &team.Name, &team.Wins, &team.Losses, &team.SeasonCount)
		if err != nil {
			return []models.TeamWithStats{}, err
		}
		teams = append(teams, team)
	}
	return teams, nil
}
