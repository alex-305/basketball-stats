package db

import (
	"github.com/alex-305/basketball-stats/backend/db/queries"
	"github.com/alex-305/basketball-stats/backend/db/scan"
	"github.com/alex-305/basketball-stats/backend/models"
)

func (db *DB) GetPlayerSeasons(query string, params ...string) ([]models.PlayerSeason, error) {

	args := make([]any, len(params))
	for i, v := range params {
		args[i] = v
	}

	rows, err := db.Query(query, args...)

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

func (db *DB) GetPlayerSeasonsFromPlayer(id string) ([]models.PlayerSeason, error) {
	return db.GetPlayerSeasons(queries.PlayerSeasons, id)
}

func (db *DB) GetRandPlayerSeasons() ([]models.PlayerSeason, error) {
	return db.GetPlayerSeasons(queries.RandPlayerSeasons)
}
