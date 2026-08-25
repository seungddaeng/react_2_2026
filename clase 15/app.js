"use strict";
let intentos = 3;
let mensaje = "Hola jiji";
let activo = true;
console.log(intentos);
console.log(mensaje);
console.log(activo);
let numero = "5";
console.log(numero == "5");
console.log(numero === "5");
class Celda {
    fila;
    columna;
    valor;
    constructor(fila, columna, valor) {
        this.fila = fila;
        this.columna = columna;
        this.valor = valor;
    }
}
