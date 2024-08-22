package db

import (
	"log"
	"strings"

	"github.com/alex-305/basketball-stats/backend/db/queries"
	"github.com/alex-305/basketball-stats/backend/db/scan"
	"github.com/alex-305/basketball-stats/backend/models"
)

func (db *DB) GetTeamSeasons(id string) ([]models.TeamSeason, error) {

	rows, err := db.Query(queries.TeamSeasons, strings.ToUpper(id))

	if err != nil {
		log.Printf("%s", err)
		return []models.TeamSeason{}, err
	}

	defer rows.Close()

	ps, err := scan.TeamSeasons(rows)

	if err != nil {
		log.Printf("%s", err)
		return []models.TeamSeason{}, err
	}

	return ps, nil
}
