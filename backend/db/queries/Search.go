package queries

const Search = "SELECT 'team' AS type, name, id FROM teams t WHERE t.name LIKE $1 UNION SELECT 'player' AS type, name, id FROM players p WHERE p.name LIKE $1 ORDER BY type DESC LIMIT 5"
