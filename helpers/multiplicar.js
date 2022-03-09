const fs = require('fs');
const color = require('colors');

const crearArchivoTabla = async (base = 5, show, limit) => {

    try {
        let salida = '';

        for (let index = 1; index <= limit; index++) {
            const element = base * index;
            salida += (`${base} X ${index} = ${element}\n`);
        }

        // TODO: Si listar esta en true se lista sino devuelve name file
        if (show) {
            console.log('==================='.green);
            console.log('   Tabla del: ', color.magenta(base));
            console.log('==================='.blue);
            console.log(salida.rainbow);
        }

        fs.writeFileSync(`./salida/table-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = crearArchivoTabla