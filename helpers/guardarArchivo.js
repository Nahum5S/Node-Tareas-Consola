const fs = require('fs');

const archivo = './db/data.json';

const  guardarDB = (data) =>{

    fs.writeFileSync( archivo, JSON.stringify(data) );
} 


const leerDB = () =>{
    if (!fs.existsSync(archivo)){ //Es para ver si no existe, entonces no existe y regresamos null
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);//Dato importante, cuando regresa un string normalmente en la consola va a aparecer todo en blanco, pero
    //al momento de parsear el objeto para convertirlo a un arreglo los datos aparecen en verde
    //console.log(data);

    return data;
}



module.exports = {
    guardarDB,
    leerDB
}