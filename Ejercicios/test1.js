'use strict';
(() => {
    const bAppend = appendLI('becados');
    const alumnosState = alumnosService({alumnos:[]});
    fetch('/alumnos')
    .then((res)=> {
        return res.json()
    })
    .then((alumnos) => {
        console.log(alumnos);
        });
    });