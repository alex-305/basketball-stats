package scan

import (
	"database/sql"

	"github.com/alex-305/basketball-stats/backend/models"
)

func PlayerSeasons(rows *sql.Rows) ([]models.PlayerSeason, error) {

	ps := []models.PlayerSeason{}

	for rows.Next() {
		var season models.PlayerSeason
		err := rows.Scan(&season.PlayerID, &season.TeamID, &season.Year, &season.PointsPerGame, &season.ReboundsPerGame, &season.AssistsPerGame, &season.StealsPerGame, &season.BlocksPerGame)

		if err != nil {
			return []models.PlayerSeason{}, err
		}

		ps = append(ps, season)

	}
	return ps, nil
}
