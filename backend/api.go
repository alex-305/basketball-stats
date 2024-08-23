package main

import (
	"log"
	"net/http"

	"github.com/alex-305/basketball-stats/backend/db"
	"github.com/alex-305/basketball-stats/backend/handlers"
	gHandlers "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type APIServer struct {
	ListenAddress string
	DB            *db.DB
}

func CreateServer(listenAddress string, db *db.DB) APIServer {
	server := APIServer{
		ListenAddress: listenAddress,
		DB:            db,
	}
	return server
}

func (s *APIServer) Start() error {
	router := mux.NewRouter()
	s.defineRoutes(router)

	log.Printf("Server is now listening on address %s", s.ListenAddress)

	corsHandler := gHandlers.CORS(
		gHandlers.AllowedOrigins([]string{"localhost:5173", "*"}),
		gHandlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		gHandlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
	)(router)

	return http.ListenAndServe(s.ListenAddress, corsHandler)
}

type handlerFunc func(http.ResponseWriter, *http.Request, *db.DB)
type httpFunc func(http.ResponseWriter, *http.Request)

func makeHttp(fn handlerFunc, d *db.DB) httpFunc {
	return (func(w http.ResponseWriter, r *http.Request) {
		fn(w, r, d)
	})
}

func (s *APIServer) defineRoutes(r *mux.Router) {
	r.HandleFunc("/player/{id}/seasons", makeHttp(handlers.GetPlayerSeasons, s.DB))
	r.HandleFunc("/rand/player/seasons", makeHttp(handlers.GetRandPlayerSeason, s.DB))
	r.HandleFunc("/player/{id}", makeHttp(handlers.GetPlayer, s.DB))
	r.HandleFunc("/team/{id}", makeHttp(handlers.GetTeam, s.DB))
	r.HandleFunc("/team/{id}/seasons", makeHttp(handlers.GetTeamSeasons, s.DB))
	r.HandleFunc("/search/{query}", makeHttp(handlers.GetSearch, s.DB))
	// r.HandleFunc("/players", makeHttp(handlers, s.DB))
	// r.HandleFunc("/teams", makeHttp(handlers,s.DB))
}
