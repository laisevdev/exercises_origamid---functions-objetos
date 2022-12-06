// OBJETOS JS

let minhaPessoa = {
    nome: 'LAÍSE',
    idade: 28,
    cidade: 'TGA',
    estado: 'MT'
};

console.log (minhaPessoa.nome);

var quadrado = {
    lados: 4,
    area: function (lado) { // >> area é um método
    return lado * lado; 
    },
    perímetro: function (lado) {  // >> perimetro é um método
        return lado * this.lados; // >> o this é usado para acessar um dado dentro de um objeto
    }
};

console.log (quadrado.area (8));
console.log (quadrado.perímetro (9));

// ABREVIAÇÃO DE MÉTODOS - NAO PRECISA ESCREVER O FUNCTION

var quadrados = {
    lados: 4,
    area (lado) {              // >> area é um método
    return lado * lado; 
    },
    perímetro (lado) {      // >> perimetro é um método
        return lado * this.lados;   // >> o this é usado para acessar um dado dentro de um objeto
    },
    cinco () {
        return 5;
    },
};

console.log (quadrados.area(3));
console.log (quadrados.perímetro(4));
console.log (quadrados.cinco ());

// PARA O QUE SERVE OBJETOS - SERVE PARA UTILIZAR O MESMO CÓDIGO EM VÁRIOS LOCAIS DO PROGRAMA

// MÉTODOS NATIVO JS

console.log (Math.random ());
console.log (Math.random ());
console.log (Math.abs (8));
console.log (Math.PI );
console.log (Math.acos([2]));


// GET - ACESSA PROPRIEDADES DO OBJETO ATRAVÉS DO .
// SET - SUBSTITUI PROPRIEDADES DO OBJETO ATRAVÉS DO . E = APÓS O NOME DA MESMA


var menu = {
    width: 800,
    heigth: 500,
    backgroundColor: '#fff3',
    metadeHeight () {
       return this.heigth / 2; 
    }
}

menu.backgroundColor = '#8889'   //> SET
menu.color = 'blue'              //> SET

var bg = menu.backgroundColor;   //>GET

//EXERCÍCIO OBJETOS 

// Crie um objeto com os seus dados pessoais
// Deve possuiR pelo menos duas propriedades nome e sobrenome

let meusDados = {
    nome: 'Laíse',
    sobrenome: 'Vieira Alves',
    idade: 28,
    estado: 'MT',
    país: 'BRASIL',
    nomeCompleto () {
        return this.nome + ' ' + this.sobrenome;
    }
};

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  





