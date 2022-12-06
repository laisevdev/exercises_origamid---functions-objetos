/*
let carro = 'ferrari'
console.log (typeof carro)

let valorBolo = 19.99
console.log (valorBolo)

let estado = 'SP'
let cidade = 'São Paulo'
console.log (cidade, estado)

// IF and ESLE - CONDICIONAIS

let idade = 68

if (idade >= 11 && idade < 18) {
    console.log ('você é pré-adolescente')
} else if (idade > 6 && idade < 11) {
    console.log ('Você é uma criança')
} else if (idade >= 18) {
    console.log (' Você é um Adulto')
} else {
    console.log ('Você é um idoso')
}

// EXERCÍCIOS 

let x = 10;
let y = 5;
console.log (x > y)

let w = '10';
let z = 10;
console.log (w === z)

// exrcicio carne até 45 é barata

let valorCarne = 49;

if (valorCarne <= 45) {
    console.log ('Carne barata 45 reais. Compre!')
} else {
    console.log ('Carne muito cara.')
}

// EXERCÍCIOS ORIGAMID - VARIÁVEIS

let meuNome = 'LAÍSE' 
    console.log (meuNome)


var idadeMinha = 28
console.log ('Minha idade é ' +idadeMinha)

var minhaComidaFavorita = 'Massas'
console.log ('Minha comida favorita é ' + minhaComidaFavorita)

var nada1 = ''
console.log (nada1)

var nada2 = ''
console.log (nada2)


var nada3 = ''
console.log (nada3)

var nada4 = ''
console.log (nada4)

var nada5 = ''
console.log (nada5)


// EXERCÍCIOS ORIGAMID - STRINGS

var nome = 'LAÍSE'
console.log (nome)

var sobrenome = 'ALVES'
console.log (sobrenome)

var nomeComp = nome + ' ' + sobrenome
//console.log (nomeComp)

var nomeCompleto = `${nome} ${sobrenome}`
console.log (nomeCompleto)



// EXERCÍCIOS ORIGAMID - NUMEROS

var modulo = 118 % 5;
console.log(modulo)


// EXERCÍCIOS ORIGAMID - EXPRESSÕES ARITMÉTICAS

var total = 10 + 5 * 2 / 2 + 20;;
console.log (total);

var nNum1 = 'qUANTO É 28' * 3;
console.log (nNum1);

var estring = '200';
var estring2 = 50 ;

var result = +estring + estring2
console.log (result);

var increm = 5
console.log (++increm)

//COMO DIVIDIR O PESO POR 2

var num = '80';
var unid = 'kg';
//var peso = num + unid;
var pesoPor2 = +num / 2 + '' + unid;

console.log (pesoPor2);


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

//EXERCÍCOS ORIGAMID - BOOLEAN

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log (expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log (!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log (true)
} else {
    console.log (false)
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}


//ORIGAMID - FUNÇÕES

function cubo (num) {
    return num * num * num
};

console.log (cubo (3));

function pi() {
    return 3.14
};

var total = 5 * pi();
console.log (total);




//IMC
function calculoImc (peso, altura) {
    const calculoImc = peso / (altura ** 2);
    return calculoImc
}

console.log (calculoImc (80, 1.69));

//FUNCAO - COR FAVORITA 

function corFav (cor) {
    if (cor === 'azul') {
        return 'CÉU AZUL'
    } else if (cor === 'verde') {
        return 'GOSTO DE NATUREZA'
    } else {
        return 'GOSTO DA CIDADE'
    }
}

console.log (corFav ('vErde'));


function terceiraIdade (idade) {
    if (typeof idade !== 'number') {
        return 'Errado! Digite um número por favor'
    } else if (idade >= 60) {
        return true;   
    } else {
        return false;
    }
};

console.log (terceiraIdade (80));


function visitarEstados (estados) {
    var totEstados = 27 
    var naoVisitados = totEstados - estados
    return `faltam visitar ${naoVisitados} estados no BR.`
};

*/

//EXERCICIOS FUNÇÕES - ORIGAMID
// Crie uma função para verificar se um valor é Truthy

function crianca (idade) {
    if (idade <= 11) {
        return true
    } else {
        return false
    }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado


function quadrado (lados) {
    var perimQuadrado = lados * 4
    return perimQuadrado
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome


function nomeC (nome , sobren) {
    return `${nome} ${sobren}`
}


// Crie uma função que verifica se um número é par

function parOuImpar (numero) {
    var numeroPar = numero % 2; 
    if (numeroPar === 0) {
        return 'TRUE. É UM NÚMERO PAR'
    } else {
        return 'false, É ÍMAPAR';
    }
}


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipos (dado) {
 return typeof dado
    }

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
// Corrija o erro abaixo

addEventListener ('click', function () {
    console.log ('LAÍSE VIEIRA')
});



// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }