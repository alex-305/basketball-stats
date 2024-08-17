package main

import (
	"log"
	"net/http"

	"github.com/alex-305/basketball-stats/backend/handlers"
	gHandlers "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type APIServer struct {
	ListenAddress string
}

func CreateServer(listenAddress string) APIServer {
	server := APIServer{
		ListenAddress: listenAddress,
	}
	return server
}

func (s *APIServer) Start() error {
	router := mux.NewRouter()
	s.defineRoutes(router)

	log.Printf("Server is now listening on address %s", s.ListenAddress)

	corsHandler := gHandlers.CORS(
		gHandlers.AllowedOrigins([]string{"localhost"}),
		gHandlers.AllowedMethods([]string{"GET"}),
		gHandlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
	)(router)

	return http.ListenAndServe(s.ListenAddress, corsHandler)
}

func (s *APIServer) defineRoutes(r *mux.Router) {
	r.HandleFunc("/player", handlers.HandlePlayer)
}
