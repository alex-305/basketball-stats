package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/alex-305/basketball-stats/backend/db"
	"github.com/gorilla/mux"
)

func GetPlayerSeasons(w http.ResponseWriter, r *http.Request, db *db.DB) {
	vars := mux.Vars(r)
	id := vars["id"]

	ps, err := db.GetPlayerSeasonsFromPlayer(id)

	if err != nil {
		http.Error(w, "Player does not exist", http.StatusNotFound)
		return
	}

	res, err := json.Marshal(ps)

	if err != nil {
		http.Error(w, "Could not marshal json for response", http.StatusInternalServerError)
		return
	}

	w.Write(res)
}

func GetRandPlayerSeason(w http.ResponseWriter, r *http.Request, db *db.DB) {
	ps, err := db.GetRandPlayerSeasons()

	if err != nil {
		http.Error(w, "Could not fetch random player", http.StatusNotFound)
		log.Printf("%s", err)
		return
	}

	res, err := json.Marshal(ps)

	if err != nil {
		http.Error(w, "Could not marshal json for response", http.StatusInternalServerError)
		return
	}

	w.Write(res)
}
