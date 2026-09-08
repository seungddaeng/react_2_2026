import { useEffect, useState } from 'react';

const API_URL = "https://jsonplaceholder.typicode.com";

type Publicacion = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function ListaPublicaciones() {

  const [publicaciones, setPublicaciones] =
    useState<Array<Publicacion>>([]);

  async function cargarDatos(): Promise<void> {
    const respuesta = await fetch(API_URL + "/posts");
    const datos: Array<Publicacion> = await respuesta.json();

    setPublicaciones(datos);
  }

  useEffect(() => {
    cargarDatos();
  }, []);

  return (
    <ul>
      {publicaciones.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}