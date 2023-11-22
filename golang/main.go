package main

import (
	"fmt"
	"log"
	"net/http"
)

// Constante que define a porta em que o servidor será executado
const (
	port = ":8080"
)

// Função handleRoot manipula requisições para a rota "/"
func handleRoot(rw http.ResponseWriter, r *http.Request) {
	// Escreve "Olá Mundo" na resposta HTTP
	fmt.Fprintln(rw, "Olá Mundo")
}

// Função principal que configura o servidor HTTP e inicia a escuta na porta especificada
func main() {
	// Registra a função handleRoot para lidar com requisições na rota "/"
	http.HandleFunc("/", handleRoot)

	// Log informativo indicando que o servidor está prestes a iniciar
	log.Printf("Iniciando servidor na porta %s\n", port)

	// Inicia o servidor HTTP e verifica se há erros
	err := http.ListenAndServe(port, nil)
	if err != nil {
		// Loga um erro fatal e encerra o programa se ocorrer um problema ao iniciar o servidor
		log.Fatalf("Erro ao iniciar o servidor: %v", err)
	}
}