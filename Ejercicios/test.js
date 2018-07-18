//Crear promesa
const promise = new Promise((res, rej) =>{
    setTimeout(()=> res('acaba timeout'), 5000);
});
//creamos la promesa

const promise1 = new Promise((res, rej) =>{
    let cont= 0;
 for(let i = 0; i <10000; i++){
     cont ++;
 }
 res (cont);
});




//consume la promesa
promise.then((res)=> console.log(res));

promise1.then((res)=> console.log('promise1', res));

console.log('Hola');
