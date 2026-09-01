import { useState } from 'react';

type Marca = 'x' | 'o';

type Celda = Marca | null;

type Tablero = Celda[];

const tableroInicial: Tablero = Array<Celda>(9).fill(null);

export default function TresEnRaya() {
    const [tablero, setTablero] = useState<Tablero>(tableroInicial);
    const [turno, setTurno] = useState<Marca>('x');

    const marcarCelda = (indice: number): void => {
        if (tablero[indice] !== null) return;

        setTablero(
            tablero.map((celda, posicion) => {
                return posicion === indice ? turno : celda;
            })
        );

        setTurno(turno === 'x' ? 'o' : 'x');
    };

    return (
        <table>
            <tbody>
                {[0, 1, 2].map((fila) => {
                    return (
                        <tr key={fila}>
                            {tablero
                                .slice(fila * 3, fila * 3 + 3)
                                .map((celda, columna) => {
                                    const indice = fila * 3 + columna;

                                    return (
                                        <td
                                            key={columna}
                                            onClick={() => marcarCelda(indice)}
                                        >
                                            {celda}
                                        </td>
                                    );
                                })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}