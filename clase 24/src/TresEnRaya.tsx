import { useState } from "react";

type Marca = "X" | "O";
type Celda = Marca | null;
type Tablero = Celda[];

const tableroInicial: Tablero = Array<Celda>(9).fill(null);

const LINEAS_GANADORAS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calcularGanador(tablero: Tablero): Marca | null {
  for (const [a, b, c] of LINEAS_GANADORAS) {
    if (
      tablero[a] !== null &&
      tablero[a] === tablero[b] &&
      tablero[a] === tablero[c]
    ) {
      return tablero[a];
    }
  }
  return null;
}

function tableroLleno(tablero: Tablero): boolean {
  return tablero.every((celda) => celda !== null);
}

export default function TresEnRaya() {
  const [tablero, setTablero] = useState<Tablero>(tableroInicial);
  const [turno, setTurno] = useState<Marca>("X");
  const [cargando, setCargando] = useState(false);

  const ganador = calcularGanador(tablero);
  const empate = !ganador && tableroLleno(tablero);
  const juegoTerminado = ganador !== null || empate;

  const jugarTurnoIA = async (tableroActual: Tablero) => {
    if (calcularGanador(tableroActual) || tableroLleno(tableroActual)) {
      setTurno("X");
      return;
    }

    setCargando(true);

    const respuesta = await fetch("/api/jugar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tablero: tableroActual,
        turno: "O",
      }),
    });

    const datos = await respuesta.json();

    if (datos.indice !== -1) {
      const nuevoTablero = [...tableroActual];
      nuevoTablero[datos.indice] = "O";
      setTablero(nuevoTablero);
    }

    setTurno("X");
    setCargando(false);
  };

  const marcarCelda = (indice: number): void => {
    if (
      tablero[indice] !== null ||
      turno !== "X" ||
      cargando ||
      juegoTerminado
    )
      return;

    const nuevoTablero = tablero.map((celda, posicion) =>
      posicion === indice ? "X" : celda
    ) as Tablero;

    setTablero(nuevoTablero);
    setTurno("O");

    jugarTurnoIA(nuevoTablero);
  };

  const reiniciar = () => {
    setTablero(tableroInicial);
    setTurno("X");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Tres en raya</h1>
      <table
        style={{
          borderCollapse: "collapse",
          margin: "0 auto",
        }}
      >
        <tbody>
          {[0, 1, 2].map((fila) => (
            <tr key={fila}>
              {tablero.slice(fila * 3, fila * 3 + 3).map((celda, columna) => {
                const indice = fila * 3 + columna;
                return (
                  <td
                    key={columna}
                    onClick={() => marcarCelda(indice)}
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "2px solid #333",
                      textAlign: "center",
                      fontSize: "32px",
                      cursor: "pointer",
                    }}
                  >
                    {celda}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {cargando && <p>La IA está pensando...</p>}

      {ganador && (
        <h2>{ganador === "X" ? "ganastee:D" : "gana la ia pipipi"}</h2>
      )}

      {empate && <h2>es un empate</h2>}

      <button onClick={reiniciar} style={{ marginTop: "20px" }}>
        Reiniciar
      </button>
    </div>
  );
}