"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recorrerEstudiantes_1 = __importDefault(require("./recorrerEstudiantes"));
const Operaciones_1 = require("./Operaciones");
const estudiante1 = {
    nombre: "Angiee",
    apellidos: "Martínez",
    edad: 17,
    tipoIdentificacion: "TI",
    numeroIdentificacion: 123432
};
const estudiante2 = {
    nombre: "Felipe",
    apellidos: "Martínez",
    edad: 18,
    tipoIdentificacion: "CC",
    numeroIdentificacion: 432132
};
const estudiante3 = {
    nombre: "Juan",
    apellidos: "Buitrago",
    tipoIdentificacion: "TI",
    numeroIdentificacion: 67898
};
const estudiante4 = {
    nombre: "Sarah",
    apellidos: "Smith",
    edad: "15",
    tipoIdentificacion: "TI",
    numeroIdentificacion: 67898
};
const listaEstudiante = [estudiante1];
console.log(listaEstudiante);
//Invocamos 
(0, recorrerEstudiantes_1.default)(listaEstudiante);
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
console.log(listaEstudiante);
(0, Operaciones_1.insertarEstudiante)(estudiante1);
console.log("------------------");
console.log("Despues de insertar");
console.log("------------------");
console.log(listaEstudiante, estudiante2);
//Delete
(0, Operaciones_1.borrarEstudiante)(1, listaEstudiante);
console.log("------------------");
console.log(listaEstudiante);
