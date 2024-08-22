package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/alex-305/basketball-stats/backend/db"
	"github.com/gorilla/mux"
)

func GetSearch(w http.ResponseWriter, r *http.Request, db *db.DB) {
	vars := mux.Vars(r)
	query := vars["query"]

	results, err := db.Search(query)

	if err != nil {
		http.Error(w, "Error fetching results", http.StatusNotFound)
		return
	}

	res, err := json.Marshal(results)

	if err != nil {
		http.Error(w, "Could not marshal json for response", http.StatusInternalServerError)
		return
	}

	w.Write(res)
}
