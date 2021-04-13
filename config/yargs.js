const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base debe ser numérica';
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra o no la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        describe: 'Es el número máximo por el que se multiplicará la base. Por defecto es 10 si no se elige un valor.'

    })
    .argv;

    module.exports = argv;