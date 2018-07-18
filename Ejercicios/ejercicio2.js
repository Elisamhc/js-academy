const valor1 = 2;
const valor2 = 3;


let suma = valor1 + valor2;

console.log(suma);

const valor3 = 2;
const valor4 = 2;

suma = valor3 + valor4;

 
console.log(suma);


var carro1 = {
    color: 'rojo',
    dobletraccion: 'true',
    puertas: 4
}

var carro2 = {
    color: 'azul',
    dobletraccion: 'true',
    puertas: 4
}

var carro3 = {
    color: 'negro',
    dobletraccion: 'true',
    puertas: 2
}


let carros = (carro1, carro2, carro3);

console.log(carros);


var numeros = [ 122, 8, 12, 40 ];

function valor (p1, p2) {
    return p1*p2;
}

var x = num (4,3);
function num(a,b) {
    return a*b
}

console.log(x);


for (let i = 0; i < carros.length; i++) {
    const carros = [i];
    console.log(i);
    
}


numeros.forEach(function(item,index,array){
    console.log(item);
    console.log(index);
    console.log(array);
});
