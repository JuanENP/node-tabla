/*En este archivo hace lo mismo que app-.js pero con una librería o paquete llamado yargs que 
hará que la lectura de consola sea mucho más simple */
// const { argv } = require('yargs');
const { options } = require('yargs');
//importar la funcion crearArchivo
const {crearArchivo} = require('./partes/multiplicar');
//importar yargs del archivo yargs.js
const argv = require('./config/yargs');
require('colors');
console.clear();

// console.log(process.argv);
//el base 5 es el valor por defecto si no se da ese parámetro en consola
// const [, , argumento3='base=5'] = process.argv;

// //extraer el numero de la base
// const [, base='5'] = argumento3.split('=');

// console.log(base);
// const base=20;

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(`${nombreArchivo}` + ` Creado`.yellow))
.catch(err=>console.log(err));