import { Estudiante } from "./Estudiante"

export const insertarEstudiante = function(estudiante:Estudiante, arregloEstudiantes:Estudiante[])
{
};

export const actualizarEstudiante =function (indice:number, listaEstudiante : Estudiante, nombre : string, apellidos: string){
    /*Instrucciones para actualizar el estudiante que se encuentre en el indice indicado en el parametro */
}

export const borrarEstudiante = function(indice:number, listaEstudiante : Estudiante[]){
    delete listaEstudiante[indice];
}
