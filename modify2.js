const fs = require('fs')
const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf8', (err, contenido) =>{
    if(err){
        console.error("Error al leer el archivo JSON", err);
        return;
    }
    try{
        const libros = JSON.parse(contenido);

        //Modificar la disponibilidad del segundo libro
        libros[1].disponible = true;
        

        //Guardar los cambios en el archivo
        fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err) =>{
            if(err){
                console.error("Error al escribir el archivo JSON", err)
            }else {
                console.log("Disponibilidad del libro actulizado exitosamente.");
            }
        })
    }catch(err){
        console.error("Error al parsear el archivo JSON.", err);
    }
})