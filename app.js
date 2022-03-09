const crearArchivoTabla = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

// const [, , argBase = '5'] = process.argv; // argumentos que vienen
// const [, base = 5] = argBase.split('='); // desde la consola

// console.log(process.argv);
// console.log(argv);
// console.log('base', argv.base);


// mandar como argumento l
crearArchivoTabla(argv.b, argv.s, argv.l)
    .then(nombreArchivo => { console.log(nombreArchivo.rainbow, 'creado') })
    .catch(err => console.log(err))