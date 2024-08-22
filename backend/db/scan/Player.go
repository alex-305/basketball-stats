package scan

import (
	"database/sql"

	"github.com/alex-305/basketball-stats/backend/models"
)

func Player(row *sql.Row) (models.Player, error) {
	player := models.Player{}
	err := row.Scan(&player.ID, &player.Name, &player.Birthday)
	return player, err
}
