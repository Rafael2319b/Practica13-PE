const fs = require('fs')
const fileName = 'archivo.json'

fs.readFile(fileName, 'utf8', (err, contenido) =>{
    if(err){
       console.error("Error al leer el archivo JSON.");
       return;
    }

    try{
        const objectJSON = JSON.parse(contenido);
        delete objectJSON.activo;
        const newContent = JSON.stringify(objectJSON, null, 2);
        fs.writeFile(fileName, newContent, (err) => {
            if(err){
                console.error("Error al escribir en el archivo JSON.")
            }
            console.log("Valor eliminado del archivo JSON exitosamente.")
        })
    }catch (err){
        console.error("Error al parsear el JSON.");
    }
})