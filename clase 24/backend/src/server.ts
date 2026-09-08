import express from "express";
import { mejorMovimiento } from "./minimax.js";
import type { Tablero, Marca } from "./minimax.js";

const app = express();

const puerto = 3000;

app.use(express.json());

app.get("/saludo", (req, res) => {
    res.send("Hola desde Express");
});

app.post("/api/jugar", (req, res) => {
    const tablero = req.body.tablero as Tablero;
    const turno = req.body.turno as Marca;

    const indice = mejorMovimiento(tablero, turno);

    res.json({ indice });
});

app.listen(puerto, () => {
    console.log("servidor iniciado");
});