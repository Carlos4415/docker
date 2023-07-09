// Aplicação Go simples que cria um servidor HTTP que responde com "Olá Mundo" para todas as solicitações.

package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	// Define o manipulador para a rota "/"
	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		// Escreve "Olá Mundo" na resposta HTTP
		fmt.Fprintln(rw, "Olá Mundo\n")
	})

	// Inicia o servidor HTTP na porta 8080
	log.Fatal(http.ListenAndServe(":8080", nil))
}