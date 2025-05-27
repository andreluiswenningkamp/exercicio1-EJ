"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Mapa para armazenar os contatos
var contatos = new Map();
// Função para adicionar um contato
function adicionarContato(nome, telefone) {
    if (contatos.has(nome)) {
        rl.question("O contato '".concat(nome, "' j\u00E1 existe. Deseja atualizar o telefone? (s/n): "), function (resposta) {
            if (resposta.toLowerCase() === 's') {
                contatos.set(nome, telefone);
                console.log("Telefone de '".concat(nome, "' atualizado com sucesso."));
            }
            else {
                console.log('Operação cancelada. O telefone não foi alterado.');
            }
            exibirMenu();
        });
    }
    else {
        contatos.set(nome, telefone);
        console.log("Contato '".concat(nome, "' adicionado com sucesso."));
        exibirMenu();
    }
}
// Função para listar os contatos
function listarContatos() {
    if (contatos.size === 0) {
        console.log('A lista de contatos está vazia.');
    }
    else {
        console.log('\nLista de Contatos:');
        contatos.forEach(function (telefone, nome) {
            console.log("Nome: ".concat(nome, " - Telefone: ").concat(telefone));
        });
    }
    exibirMenu();
}
// Função para buscar um contato
function buscarContato(nome) {
    if (contatos.has(nome)) {
        var telefone = contatos.get(nome);
        console.log("Nome: ".concat(nome, " - Telefone: ").concat(telefone));
    }
    else {
        console.log("Contato '".concat(nome, "' n\u00E3o encontrado."));
    }
    exibirMenu();
}
// Setup do readline
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Função para exibir o menu
function exibirMenu() {
    console.log('\n===== Menu de Contatos =====');
    console.log('1 - Adicionar Contato');
    console.log('2 - Listar Contatos');
    console.log('3 - Buscar Contato');
    console.log('4 - Sair');
    rl.question('Escolha uma opção: ', function (opcao) {
        switch (opcao) {
            case '1':
                rl.question('Digite o nome do contato: ', function (nome) {
                    rl.question('Digite o telefone do contato: ', function (telefone) {
                        adicionarContato(nome, telefone);
                    });
                });
                break;
            case '2':
                listarContatos();
                break;
            case '3':
                rl.question('Digite o nome do contato que deseja buscar: ', function (nome) {
                    buscarContato(nome);
                });
                break;
            case '4':
                console.log('Saindo...');
                rl.close();
                break;
            default:
                console.log('Opção inválida.');
                exibirMenu();
        }
    });
}
// Iniciar o programa
exibirMenu();
