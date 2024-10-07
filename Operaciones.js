"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarEstudiante = exports.actualizarEstudiante = exports.insertarEstudiante = void 0;
const insertarEstudiante = function (estudiante, arregloEstudiantes) {
};
exports.insertarEstudiante = insertarEstudiante;
const actualizarEstudiante = function (indice, listaEstudiante, nombre, apellidos) {
    /*Instrucciones para actualizar el estudiante que se encuentre en el indice indicado en el parametro */
};
exports.actualizarEstudiante = actualizarEstudiante;
const borrarEstudiante = function (indice, listaEstudiante) {
    delete listaEstudiante[indice];
};
exports.borrarEstudiante = borrarEstudiante;
