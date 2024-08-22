package scan

import (
	"database/sql"

	"github.com/alex-305/basketball-stats/backend/models"
)

func Search(rows *sql.Rows) ([]models.SearchResult, error) {
	results := []models.SearchResult{}

	for rows.Next() {
		var sr models.SearchResult
		err := rows.Scan(
			&sr.ResultType,
			&sr.Name,
			&sr.ID)

		if err != nil {
			return []models.SearchResult{}, err
		}

		results = append(results, sr)

	}
	return results, nil
}
