package scan

import (
	"database/sql"

	"github.com/alex-305/basketball-stats/backend/models"
)

func PlayersWithAvgs(rows *sql.Rows) ([]models.PlayerWithAvgs, error) {
	players := []models.PlayerWithAvgs{}
	for rows.Next() {
		p := models.PlayerWithAvgs{}
		err := rows.Scan(
			&p.ID, &p.Name, &p.StealsPerGame,
			&p.BlocksPerGame, &p.ReboundsPerGame, &p.AssistsPerGame,
			&p.PointsPerGame, &p.StartYear, &p.EndYear, &p.GamesPlayed)

		if err != nil {
			return []models.PlayerWithAvgs{}, err
		}

		players = append(players, p)
	}
	return players, nil
}
