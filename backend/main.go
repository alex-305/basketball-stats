package main

func main() {
	server := CreateServer("localhost:8080")
	err := server.Start()
	if err != nil {
		panic(err)
	}
}
