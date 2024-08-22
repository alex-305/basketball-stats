package db

import (
	"log"
	"strings"

	"github.com/alex-305/basketball-stats/backend/db/queries"
	"github.com/alex-305/basketball-stats/backend/db/scan"
	"github.com/alex-305/basketball-stats/backend/models"
)

func (db *DB) GetTeam(id string) (models.Team, error) {
	row := db.QueryRow(queries.Team, strings.ToUpper(id))

	team, err := scan.Team(row)

	if err != nil {
		log.Printf("%s", err)
		return models.Team{}, err
	}
	return team, nil
}
