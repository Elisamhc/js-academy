let sq = document.getElementById( "square-test");
let sq1 = document.getElementById( "square-log");
let b = document.getElementById ("reiniciar");

console.log(sq);


//sq.addEventListener("click", function (evento) {
//    console.log(evento);
// });

const squareLog = document.getElementById ("square-log");
const reiniciar = document.getElementById ("reiniciar");

sq.addEventListener("click", function (evento) {
    const span = document.createElement("span");
    span.innerText = evento.target.style.backgroundColor;
    console.log(span);
    //console.dir(span);
    //console.log(evento.target); 
    //console.log(evento.target.style);
    if (evento.target.style.background === "red") {
           evento.target.style.background = "blue";
    } else {
        evento.target.style.background = "red";
    }
    squareLog.appendChild(span);
});


b.addEventListener("click", function (evento){
const span = document.createElement ("span");
console.log(span);
if (evento.target.style.background === "red") {
    evento.target.style.background = " ";
}
squareLog.appendChild(span);
});












