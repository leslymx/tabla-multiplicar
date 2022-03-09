const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            describe: ('Es la base de la tabla de multiplicar'),
            demandOption: true
        },
        's': {
            alias: 'show',
            type: 'boolean',
            describe: ('Lista la tabla en consola'),
            default: false
        },
        'l': {
            alias: 'limit',
            type: 'number',
            describe: ('Limite de Hasta donde llegará la multiplicación'),
            default: 10
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;