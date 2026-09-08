import { useEffect, useState } from 'react';

type Bloque = {
  x: number;
  y: number;
};

const bloque = 5;

// Posición inicial
let posicion: Bloque = {
  x: 40,
  y: 40
};

// Crear los extraterrestres iniciales
let extraterrestresIniciales: Array<Bloque> = [];

for (let e = 1; e < 6; e++) {
  extraterrestresIniciales.push({
    ...posicion,
    x: posicion.x + e * bloque
  });
}

export default function SpaceInvader() {

  // Disparo rojo
  const [abajo, setAbajo] = useState<number>(15);

  // Array de extraterrestres
  const [extraterrestre, setExtraterrestre] =
    useState<Array<Bloque>>(extraterrestresIniciales);

  // El disparo sube
  useEffect(() => {
    const intervalo = setInterval(() => {
      setAbajo((anterior) => anterior + 5);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // Los extraterrestres cambian de posición
  useEffect(() => {
    const intervalo = setInterval(() => {

      setExtraterrestre((anterior) =>
        anterior.map((alien) => {

          const movimiento =
            Math.floor(Math.random() * 3) - 1;

          return {
            ...alien,
            x: alien.x + movimiento * bloque
          };
        })
      );

    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      {/* Arma */}
      <div className="arma"></div>

      {/* Disparo rojo */}
      <div
        className="disparo"
        style={{
          width: `${bloque}rem`,
          height: `${bloque}rem`,
          left: '50%',
          bottom: `${abajo}rem`,
          transform: 'translateX(-50%)',
          position: 'fixed',
          backgroundColor: 'red'
        }}
      ></div>

      {/* Extraterrestres */}
      {extraterrestre.map((alien, indice) => (
        <div
          key={indice}
          className="enemigo"
          style={{
            width: `${bloque}rem`,
            height: `${bloque}rem`,
            left: `${alien.x}rem`,
            bottom: `${alien.y}rem`,
            position: 'fixed',
            backgroundColor: 'skyblue'
          }}
        ></div>
      ))}
    </>
  );
}
