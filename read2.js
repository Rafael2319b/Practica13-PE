const fs = require('fs')
const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf8', (err,contenido) =>{
    if(err){
        console.error("Error al leer el archivo JSON", err)
        return;
    }

    try{
        const objectJSON = JSON.parse(contenido)
        console.log('Libros en la biblioteca: ', objectJSON)
    }catch(err){
        console.log("Error al parsear el JSON", err)
    }
})