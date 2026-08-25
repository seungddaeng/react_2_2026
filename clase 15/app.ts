let intentos: number = 3;

let mensaje: string = "Hola jiji";

let activo: boolean = true;

console.log(intentos);
console.log(mensaje);
console.log(activo);

let numero: string = "5";

console.log(numero == "5");
console.log(numero === "5");

class Celda {
    fila: number;
    columna: number;
    valor: string;

    constructor(fila: number, columna: number, valor: string) {
        this.fila = fila;
        this.columna = columna;
        this.valor = valor;
    }
}
export {};