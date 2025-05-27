import * as readline from 'readline';

// Interface para um contato
interface Contato {
  nome: string;
  telefone: string;
}

// Mapa para armazenar os contatos
const contatos = new Map<string, string>();

// Função para adicionar um contato
function adicionarContato(nome: string, telefone: string): void {
  if (contatos.has(nome)) {
    rl.question(`O contato '${nome}' já existe. Deseja atualizar o telefone? (s/n): `, (resposta) => {
      if (resposta.toLowerCase() === 's') {
        contatos.set(nome, telefone);
        console.log(`Telefone de '${nome}' atualizado com sucesso.`);
      } else {
        console.log('Operação cancelada. O telefone não foi alterado.');
      }
      exibirMenu();
    });
  } else {
    contatos.set(nome, telefone);
    console.log(`Contato '${nome}' adicionado com sucesso.`);
    exibirMenu();
  }
}

// Função para listar os contatos
function listarContatos(): void {
  if (contatos.size === 0) {
    console.log('A lista de contatos está vazia.');
  } else {
    console.log('\nLista de Contatos:');
    contatos.forEach((telefone, nome) => {
      console.log(`Nome: ${nome} - Telefone: ${telefone}`);
    });
  }
  exibirMenu();
}

// Função para buscar um contato
function buscarContato(nome: string): void {
  if (contatos.has(nome)) {
    const telefone = contatos.get(nome);
    console.log(`Nome: ${nome} - Telefone: ${telefone}`);
  } else {
    console.log(`Contato '${nome}' não encontrado.`);
  }
  exibirMenu();
}

// Setup do readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para exibir o menu
function exibirMenu(): void {
  console.log('\n===== Menu de Contatos =====');
  console.log('1 - Adicionar Contato');
  console.log('2 - Listar Contatos');
  console.log('3 - Buscar Contato');
  console.log('4 - Sair');
  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        rl.question('Digite o nome do contato: ', (nome) => {
          rl.question('Digite o telefone do contato: ', (telefone) => {
            adicionarContato(nome, telefone);
          });
        });
        break;
      case '2':
        listarContatos();
        break;
      case '3':
        rl.question('Digite o nome do contato que deseja buscar: ', (nome) => {
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
