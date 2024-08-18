package db

import (
	"github.com/alex-305/basketball-stats/backend/db/queries"
	"github.com/alex-305/basketball-stats/backend/db/scan"
	"github.com/alex-305/basketball-stats/backend/models"
)

func (db *DB) GetPlayerSeasons(id string) ([]models.PlayerSeason, error) {

	rows, err := db.Query(queries.PlayerSeasons(), id)

	if err != nil {
		return []models.PlayerSeason{}, err
	}

	defer rows.Close()

	ps, err := scan.PlayerSeasons(rows)

	if err != nil {
		return []models.PlayerSeason{}, err
	}

	return ps, nil
}
