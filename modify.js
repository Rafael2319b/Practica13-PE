const fs = require('fs')
const fileName = 'archivo.json'

fs.readFile(fileName, 'utf8', (err,contenido) =>{
    if(err){
        console.error("Error al leer el archivo.");
        return;
    }
    try{
        const objectJSON = JSON.parse(contenido);
        objectJSON.ciclo = 'II-2024';

        const newContent = JSON.stringify(objectJSON, null, 2);
        fs.writeFile('archivo.json', newContent, (err) =>{
            if(err){
                console.error("Error al escribir en el archivo JSON.");
                return;
            }
        })
    }catch(err){
        console.log("Error al parsear el JSON.")
    }
})