const fs = require('fs')
const archivoTareas = fs.readFileSync('./tareas.json', 'UTF8')
const appTareas = JSON.parse(archivoTareas)

const funcionesDeTareas = require('./funcionesDeTareas')

//for (let i = 0; i < appTareas.length; i++){
//    console.log("- La tarea " + appTareas[i].Titulo + " está en estado " + appTareas[i].Estado)
//}
//console.log(appTareas)

//console.log(process.argv[2])
let listar = process.argv[2]

switch(listar){
    case "listar":
        funcionesDeTareas.listar();
;
break;
    case "pendientes":
        funcionesDeTareas.filtrarPendientes();
break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.");
break;
    default:
        console.log("No entiendo qué quieres hacer")
}