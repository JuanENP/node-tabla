/*En este archivo vimos como se usan los valores de la consola, pero esto es muy tedioso
si queremos validar todo. */

const {crearArchivo} = require('./partes/multiplicar');
//importar la funcion crearArchivo

console.clear();

// console.log(process.argv);
//el base 5 es el valor por defecto si no se da ese parámetro en consola
const [, , argumento3='base=5'] = process.argv;

//extraer el numero de la base
const [, base='5'] = argumento3.split('=');

// console.log(base);
// const base=20;

crearArchivo(base)
.then(nombreArchivo => console.log(`${nombreArchivo} Creado`))
.catch(err=>console.log(err));