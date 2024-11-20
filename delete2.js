const fs = require('fs')
const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf8', (err, contenido) =>{
    if(err){
        console.error("Error al leer el archivo JSON", err);
        return;
    }

    try {
        const libros = JSON.parse(contenido);

        //Eliminar el primer libro
        libros.splice(0, 1);

        //Guardar los cambios en el archivo
        fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err) =>{
            if(err){
                console.error("Error al escrbir en el archivo JSON", err);
            }else{
                console.log("Libro eliminado del archivo JSON exitosamente");
            }
        });
    }catch(err){
        console.error("Error al parsea el archivo JSON", err);
    }
})