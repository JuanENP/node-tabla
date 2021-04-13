const fs = require('fs');

const colors = require('colors');
//fs es filesystem, puede ser el nombre que quiera, obvia
const crearArchivo = async(base = 5, listar = false, hasta = 10)=>{

    try 
    {
        let salida, consola = '';
        let i=1;
        for(i;i<=hasta;i++)
        {
            consola+=`${base}`.red + ` x `.blue + `${i} = ` + `${base*i}\n`.cyan;
            salida+=`${base} x ${i} = ${base*i}\n`;
        }

        if(listar)
        {
            console.log(`===============================================================`.rainbow);
            console.log(`Tabla del ${base}`.underline.red);
            console.log(`===============================================================`.rainbow);
            console.log(consola);
        }

        /*Grabar en archivos txt */
        fs.writeFileSync(`./salidas/tabla-${base}.txt`, salida);
        return(`Tabla-${base}.txt`.rainbow);
    } catch (err) 
    {
        throw err;
    }
}

/*Para poder importar esta funcion a en cualquier lugar que queramos */
module.exports = {
    crearArchivo
}