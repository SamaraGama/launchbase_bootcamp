function arredondar(num, precisao)
{
    var multi = Math.pow(10, precisao);
    return Math.round( (num * multi).toFixed(precisao + 1) ) / multi;
}
/* importe módulo Node prompt-sync para receber input do usuário pelo terminal usando a função prompt
const prompt = require('prompt-sync')(); 
// insira dados para cálculo do IMC 
const nome = prompt('Insira seu nome');
const sexo = prompt('Insira seu sexo');
const peso = prompt('Insira seu peso');
const altura = prompt('Insira sua altura');
*/
const nome = 'Samara';
const sexo = "feminino";
const peso = 53;
const altura = 1.55;

const imc = arredondar(peso / (altura * altura), 1)

// outputs para sexo feminino
if (sexo == "feminino" & imc >= 19 & imc <= 24) {
    console.log(`${nome}, seu IMC é ${imc}. Você está na faixa de peso ideal.`)
}
if (sexo == "feminino" & imc < 19) {
    console.log(`${nome}, seu IMC é ${imc}. Você está abaixo do peso ideal. Por favor, consulte um médico.`)
}
if (sexo == "feminino" & imc > 24) {
    console.log(`${nome}, seu IMC é ${imc}. Você está acima do peso ideal. Por favor, consulte um médico.`)
}

// outputs para sexo masculino
if (sexo == "masculino" & imc >= 20 & imc <= 25) {
    console.log(`${nome}, seu IMC é ${imc}. Você está na faixa de peso ideal.`)
}
if (sexo == "masculino" & imc < 20) {
    console.log(`${nome}, seu IMC é ${imc}. Você está abaixo do peso ideal. Por favor, consulte um médico.`)
}
if (sexo == "masculino" & imc > 25) {
    console.log(`${nome}, seu IMC é ${imc}. Você está acima do peso ideal. Por favor, consulte um médico.`)
}

// output para obesidade

if (imc >= 30) {
    console.log(`${nome}, seu IMC é ${imc}. Você está muito acima do peso ideal. Por favor, consulte um médico.`)
}
