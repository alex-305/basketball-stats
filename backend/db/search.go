package db

import (
	"fmt"
	"log"

	"github.com/alex-305/basketball-stats/backend/db/queries"
	"github.com/alex-305/basketball-stats/backend/db/scan"
	"github.com/alex-305/basketball-stats/backend/models"
)

func (db *DB) Search(query string) ([]models.SearchResult, error) {
	fmtQuery := fmt.Sprintf("%%%s%%", query)
	rows, err := db.Query(queries.Search, fmtQuery)

	if err != nil {
		log.Printf("%s", err)
		return []models.SearchResult{}, err
	}
	results, err := scan.Search(rows)

	if err != nil {
		log.Printf("%s", err)
		return []models.SearchResult{}, err
	}
	return results, nil
}
