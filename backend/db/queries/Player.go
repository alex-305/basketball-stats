package queries

func Player() string {
	return `
	SELECT * FROM player WHERE name=$1`
}
