package db

import (
	"log"

	"github.com/alex-305/basketball-stats/backend/db/queries"
	"github.com/alex-305/basketball-stats/backend/db/scan"
	"github.com/alex-305/basketball-stats/backend/models"
)

func (db *DB) GetPlayer(id string) (models.Player, error) {
	row := db.QueryRow(queries.Player, id)

	player, err := scan.Player(row)

	if err != nil {
		log.Printf("%s", err)
		return models.Player{}, err
	}
	return player, nil
}
