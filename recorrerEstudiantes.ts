import { Estudiante } from "./Estudiante";
import { insertarEstudiante } from "./Operaciones";


const recorrerEstudiantes = function recorrerEstudiantes(arregloEstudiantes: Estudiante[]){
    arregloEstudiantes.forEach(function(elemento){
        console.log(elemento);
        console.log("-----------------------")
    } );
}

export default recorrerEstudiantes;

//OPERACIONES CON ARREGLOS
