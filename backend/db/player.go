package db

import "github.com/alex-305/basketball-stats/backend/models"

func (db *DB) GetPlayer(id string) (models.Player, error) {
	query := "SELECT first_name, last_name FROM player WHERE id = $1"
	row := db.QueryRow(query, id)

	var player models.Player
	err := row.Scan(&player.FirstName, &player.LastName)
	if err != nil {
		return models.Player{}, err
	}

	return player, nil
}
