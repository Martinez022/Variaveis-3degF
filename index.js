const prompt = require('prompt-sync')
const entrada = prompt();


const nomeCompleto = "Kauan Henrique Bobrowic";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 18;
const anoFormatura = 2024;

console.log("olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + " e nasci no ano de " + anoNascimento); 

idade = idade + 1;
anoAtual = anoAtual + 1;
console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero estar cursando engenharia de software, e pretendo me formar em " + anoFormatura);


//Agência de viagens Hawaii Paris China Russia Cuba
const listaDeDestinos = new Array(
  "hawaii",
  "russia",
  "china",
  "Paris",
  "cuba"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push("Campo Mourão");
console.log*(listaDeDestinos);
listaDeDestinos.push("Ponta grossa");
console.log(listaDeDestinos);
listaDeDestinos.push("Cabo Frio");
console.log(listaDeDestinos);

 var nomeComprador = entrada("Qual o seu nome? ");
var idadeComprador = entrada("Qual a sua idade? ");
  if(idadeComprador >= 18){
    console.log ("Olá senhor(a) " + nomeComprador);
    console.log("comprador maior de idade");
  console.log("Destinos disṕniveis: " + listaDeDestinos)
}
