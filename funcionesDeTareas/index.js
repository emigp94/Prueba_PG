const fs = require('fs')
const archivoTareas = fs.readFileSync(__dirname + '/../tareas.json', 'UTF8')
const appTareas = JSON.parse(archivoTareas)

function listar(){
    console.log('===Lista de Tareas===');
    for (let i = 0; i < appTareas.length; i++){
        console.log("- La tarea " + appTareas[i].Titulo + " está en estado " + appTareas[i].Estado)
}
}

function filtrarPendientes(){
    let pendientes = appTareas.filter(tarea => tarea.Estado === "Pendiente")
        //console.log(pendientes)
        for (let i = 0; i < pendientes.length; i++){
            console.log("- Las tareas pendientes son: " + pendientes[i].Titulo)
}    
}


module.exports = {listar, filtrarPendientes}
