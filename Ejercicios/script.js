'use strict';
(() => {
    const rAppend = appendLI('reprobados');
    const aAppend = appendLI('asesorias');
    const beAppend = appendLI('becados');

fetch('/alumnos') 
   .then((res)=>{
       return res.json();
   })
   .then((alumnos) =>{
       document.getElementById('reprobados').innerHTML = '';
       document.getElementById('asesorias').innerHTML = '';
       document.getElementById('becados').innerHTML = '';

       alumnos.forEach(alumno => {
           if (alumno.promedio <30){
            rAppend(alumno.nombre);
           }
           if (alumno.promedio >80 || alumno.promedio > 30 && alumno.destacado===true){
            beAppend(alumno.nombre);
           }
           if (alumno.promedio >30 && alumno.promedio <80){
            aAppend(alumno.nombre);
           }
       });
});
})();









//function imprimirAlumnos(alumnos) {
  //document.getElementById('becados').innerHTML = '';
    //alumnos.forEach(alumno => {
    //bAppend(alumno.nombre);
    //});
//}
function appendLI(id) {
  const list = document.getElementById(id);
    return (text) => {
      const listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(text));
        list.appendChild(listItem);
    }
}
