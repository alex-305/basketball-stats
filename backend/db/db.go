package db

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

type DB struct {
	*sql.DB
}

func Connect() (*DB, error) {
	db, err := sql.Open("sqlite3", "./nba.sqlite")
	if err != nil {
		return &DB{}, err
	}
	return &DB{db}, nil
}
