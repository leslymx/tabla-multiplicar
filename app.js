const crearArchivoTabla = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

crearArchivoTabla(argv.b, argv.s, argv.l)
    .then(nombreArchivo => { console.log(nombreArchivo.rainbow, 'creado') })
    .catch(err => console.log(err))