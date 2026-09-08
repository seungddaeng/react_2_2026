import { useEffect, useState } from "react";

function Saludo() {

    const [saludo, setSaludo] = useState("");

    useEffect(() => {

        fetch("/saludo")
  .then((res) => res.text())
  .then((data) => setSaludo(data));

    }, []);

    return <p>{saludo}</p>;
}

export default Saludo;
