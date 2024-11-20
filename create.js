const fs = require('fs')

const fileName = 'archivo.json'
const contenido = {
    nombre: 'Rafael Alexander',
    edad: 18,
    materias: ['Logica de Programacion', 'Desarrollo del Pensamiento Matematico', 'Administracion de Sistemas Operativos'],
    activo: true
}

fs.writeFile(fileName, JSON.stringify(contenido, null, 2), (err) =>{
    if(err){
        console.error("Error al crear el archivo JSON.")
    }else{
        console.log("Archivo JSON creado satisfactoriamente.")
    }
})