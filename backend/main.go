package main

import (
	"log"

	"github.com/alex-305/basketball-stats/backend/db"
)

func main() {

	db, err := db.Connect()

	if err != nil {
		log.Fatal("Could not connect to db")
	}

	server := CreateServer("localhost:8080", db)
	err = server.Start()
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()
}
