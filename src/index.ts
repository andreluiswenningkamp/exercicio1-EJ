import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
let escolha = '0';
const rl = readline.createInterface({ input, output });

const contatos: { [key: string]: string } = {};

async function obterNome(): Promise<string> {
  return new Promise((resolve) => {
    rl.question('Qual é o seu nome? ', (nome) => {
      resolve(nome);
    });
  });
}

async function obterTelefone(): Promise<string> {
  return new Promise((resolve) => {
    rl.question('Qual é o seu número de telefone? ', (telefone) => {
      resolve(telefone);
    });
  });
}


async function adicionar_contato(nome:string, telefone: string):Promise<void> {
  const nomeAVerificar = await obterNome();
  const telefoneAVerificar = await obterTelefone();
  contatos[nome] = telefone;
}

function lista_contatos(): string {
  console.log(contatos);
  return '';
}


switch(escolha) {
  case "1":
    adicionar_contato(nome, telefone);
    break;
}