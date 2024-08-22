package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/alex-305/basketball-stats/backend/db"
	"github.com/gorilla/mux"
)

func GetTeam(w http.ResponseWriter, r *http.Request, db *db.DB) {
	vars := mux.Vars(r)
	id := vars["id"]

	player, err := db.GetTeam(id)

	if err != nil {
		http.Error(w, "Team does not exist", http.StatusNotFound)
		return
	}

	res, err := json.Marshal(player)

	if err != nil {
		http.Error(w, "Could not marshal json for response", http.StatusInternalServerError)
		return
	}

	w.Write(res)
}
