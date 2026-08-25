"use strict";

console.log("esto es un buscaminas:DDDDDD");

let tabla = document.querySelector<HTMLTableElement>(".minesweeper");

if (tabla) {
    console.log(tabla.tagName);
}

let celda = document.querySelector<HTMLTableElement>(".minesweeper");

if (celda) {
    console.log(celda.tagName);
} else {
    console.log("no existe");
}

let listaElementos = document.querySelectorAll("td");

for (const elemento of listaElementos) {
    elemento.addEventListener("click", function () {
        console.log(elemento.textContent);
        console.log(elemento.classList.value);

        if (elemento.classList.contains("mina")) {

            for (const item of listaElementos) {
                item.textContent="💥"
                item.style.color="gray"
            }

        }
        elemento.style.color="gray"

    })
}
