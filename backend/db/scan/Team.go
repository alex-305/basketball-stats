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
