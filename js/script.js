// Função 1 dos exercícios de lógicas de programção com JavaScript

function exercicio01() {
    var numero1 = parseInt(prompt("Digite um número:"));
    var numero2 = parseInt(prompt("Digite um número:"));
    
    var soma = numero1 + numero2;
    
    alert("A soma dos números é:\n"+ soma);
}

// Função 2 dos exercícios de lógicas de programção com JavaScript


function exercicio02() {

    var numero1 = parseInt(prompt("Digite um valor"));
var numero2 = parseInt(prompt ("digite outro valor"));

var subtração = numero1 - numero2;
alert(subtração)
alert("a subtração dos numeros digitados é:\n" + subtração)
}


// Função 3 dos exercícios de lógicas de programção com JavaScript

function exercicio03(){

    var numero1 = parseInt(prompt ("digite um valor:"))
var numero2 = parseInt(prompt("digite outro numero"))
 
var divisão = numero1 / numero2;
alert (divisão)
alert ("Adivisão dos números é:\n"+ divisão)

}


// Função 4 dos exercícios de lógicas de programção com JavaScript

function exercicio04(){


    var valor = parseInt(prompt("Digite um número"))
    if (valor < 10){
    alert ("o valor é menor que 10:\n"+ valor);
    }else{
    alert("o valor é maior que 10:\n" + valor);
    }

}


// Função 5 dos exercícios de lógicas de programção com JavaScript

function exercicio05(){

    var numero = parseInt (prompt("Digite um número"))
if (numero >= 0){
    alert("o numero é positivo:\n" + numero)
}else{
    alert("o numero é negativo:\n" + numero)
}
}


// Função 6 dos exercícios de lógicas de programção com JavaScript


function exercicio06(){

    var nota1 = parseInt(prompt("Digite o valor da nota1"))
var nota2 = parseInt(prompt("Digite o valor da nota2"))
let media = (nota1 + nota2) /2
if(media >=6){
alert ("O aluno foi aprovado com média:\n"+ media)
}else{
    alert ("O aluno foi reprovado com média:\n"+ media)
}
}


// Função 7 dos exercícios de lógicas de programção com JavaScript

function exercicio07(){

    let count = 1
    let somar = 0
    while (count <= 100) {
        somar += count
        count++
        console.log (somar)
    }
    alert ("Aperte F12 para aparecer as informações:")
}


// Função 8 dos exercícios de lógicas de programção com JavaScript

function exercicio08(){

    let count = 15
  let acumulador = 0
  do {
    acumulador = count
    acumulador *= acumulador
    count++
 
    console.log(acumulador)
  } while (count <= 200)
  alert ("Aperte F12 para aparecer as informações:")
}
 

// Função 9 dos exercícios de lógicas de programção com JavaScript//

function exercicio09(){

    let base = parseInt(prompt("Digite a base do seu retangulo: "))
    let altura = parseInt(prompt("Agora a altura do seu retangulo: "))

    let area = base * altura
    alert("A area do seu retangulo é:\n" + area)
}
 

// Função 10 dos exercícios de lógicas de programção com JavaScript

function exercicio010(){

    let raio = parseInt(prompt("Digite o raio do seu circulo: "))
    let area = (3.14 * raio)
    alert("A area do seu circulo é:\n" + area)
}


// Função 11 dos exercícios de lógicas de programção com JavaScript

function exercicio11(){

    var numero1 = parseInt(prompt ("digite um valor:"))
    var numero2 = parseInt(prompt("digite outro numero"))
     
    let multiplicacão = numero1 * numero2;
    alert ("A multiplicação dos números é:\n"+ multiplicacão)
}


// Função 12 dos exercícios de lógicas de programção com JavaScript

function exercicio12(){

    var nota1 = parseInt(prompt("Digite a nota 1:"));
    var nota2 = parseInt(prompt("Digite a nota 2:"));
    var nota3 = parseInt(prompt("Digite a nota 3:"));
    let media = ( nota1 *2 + nota2 *3 + nota3 *5) /10
    alert ("A média do aluno é :\n"+ media)
}


// Função 13 dos exercicios de lógicas de programação com JavaScript

function exercicio13(){

var saldo = parseInt(prompt("Digite o seu Saldo:"));
var debito = parseInt(prompt("Digite seu Debito:"));
var credito = parseInt(prompt("Digite seu Credito:"));
let saldoatual = ( saldo - debito + credito)
if (saldoatual < 0 ){
    alert ("Seus Saldos está negativo, Saldos atual:\n"+ saldoatual)
}else{
    alert ("Seus Saldos está positivo, Saldos atual:\n" + saldoatual)
}
}


// Função 14 dos exercicios de lógicas de programação com JavaScript

function exercicio14(){

var quantidadeatual = parseInt(prompt("Digite a quantidade autal no estoque"))
var estoquemaximo = parseInt(prompt("Digite a quantidade maxima de items no estoque:"));
var estoqueminimo = parseInt(prompt("Digite a quantidade minima de items no estoque:"));
let media = ((quantidadeatual = estoquemaximo + estoqueminimo )/2)
if ( media < 1){
    alert ("Você não tem items no estoque:\n" + media)
}else{
    alert ("Você tem items no estoque:\n " + media)
}  
}


// Função 15 dos exercicios de lógicas de programação com JavaScript

function exercicio15(){

    var anoatual= parseInt(prompt("Digite o ano atual:"));
    var anodenascimento = parseInt(prompt("Digite a seu ano de nascimento:"));
    let idade = (anoatual - anodenascimento)
    alert ("A sua idade é:\n"+ idade)
}


// Função 16 dos exercicios de lógicas de programação com JavaScript

function exercicio16(){

    var idade = parseInt(prompt("Digite a sua idade"));
    if (idade <16){
        alert("Seu voto é opcional:\n"+ idade)
    }else{
        alert("Seu voto é obrigatório:\n"+ idade)
    }
}