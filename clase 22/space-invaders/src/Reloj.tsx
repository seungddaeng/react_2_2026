import { useEffect, useState } from 'react';

export default function Reloj() {
  const [segundos, setSegundos] = useState<number>(0);

  useEffect(() => {
    const reloj = setInterval(() => {
      setSegundos((anterior) => {
        return anterior + 1;
      });
    }, 1000);

    return () => {
      clearInterval(reloj);
    };
  }, []);

  return <p>segundos: {segundos}</p>;
}

