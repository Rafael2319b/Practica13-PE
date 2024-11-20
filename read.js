const fs = require('fs')
const fileName = 'archivo.json'

fs.readFile(fileName, 'utf8', (err,contenido) =>{
    if(err){
        console.error("Error al leer el archvio JSON");
        return;
    }
    try{
        const objectJSON = JSON.parse(contenido);
        console.log("Contenido del archivo JSON", objectJSON);
    }catch(err){
        console.error("Error al parsear el JSON.", err)
    }
})