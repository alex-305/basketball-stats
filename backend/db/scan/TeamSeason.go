package scan

import (
	"database/sql"

	"github.com/alex-305/basketball-stats/backend/models"
)

func TeamSeason(row *sql.Rows) (models.TeamSeason, error) {
	var season models.TeamSeason
	err := row.Scan(
		&season.TeamID,
		&season.Year,
		&season.Wins,
		&season.Losses)

	if err != nil {
		return models.TeamSeason{}, err

	}
	return season, nil
}

func TeamSeasons(rows *sql.Rows) ([]models.TeamSeason, error) {
	ts := []models.TeamSeason{}

	for rows.Next() {
		season, err := TeamSeason(rows)
		if err != nil {
			return []models.TeamSeason{}, err
		}
		ts = append(ts, season)

	}
	return ts, nil
}
