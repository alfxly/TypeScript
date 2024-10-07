import { Estudiante } from "./Estudiante";
import recorrerEstudiantes from "./recorrerEstudiantes";
import { insertarEstudiante, actualizarEstudiante, borrarEstudiante } from "./Operaciones";

const estudiante1: Estudiante= {
    nombre : "Angiee",
    apellidos :"Martínez",
    edad: 17,
    tipoIdentificacion: "TI",
    numeroIdentificacion: 123432
}

const estudiante2: Estudiante= {
    nombre : "Felipe",
    apellidos :"Martínez",
    edad: 18,
    tipoIdentificacion: "CC",
    numeroIdentificacion: 432132
}

const estudiante3: Estudiante= {
    nombre : "Juan",
    apellidos :"Buitrago",
    tipoIdentificacion: "TI",
    numeroIdentificacion: 67898
}

const estudiante4: Estudiante= {
    nombre : "Sarah",
    apellidos :"Smith",
    edad:"15",
    tipoIdentificacion: "TI",
    numeroIdentificacion: 67898
}

const listaEstudiante : (Estudiante)[] =[ estudiante1]
console.log(listaEstudiante)

//Invocamos 
 recorrerEstudiantes(listaEstudiante);

//console.log(estudiante1, estudiante2, estudiante3, estudiante4);

/*let nombre: string = `Angiee`;
nombre = "Felipe";
console.log(nombre); 

const cedula: number = 123432;
console.log(cedula);*/

//Definiendo obj(literal)

//OPERACIONES
//Agregar
console.log("------------------");
console.log("Ante de insertar");
console.log(listaEstudiante)
insertarEstudiante(estudiante1);
console.log("------------------");
console.log("Despues de insertar");
console.log("------------------");
console.log(listaEstudiante,estudiante2)

//Delete
borrarEstudiante(1, listaEstudiante); 
console.log("------------------");
console.log(listaEstudiante);



