import React, { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productoServices";

export default function ListaProductosView() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      // 1. Ejecutamos la funcion que me devuelve los productos
      const productosObtenidos = await obtenerProductos();
      setProductos(productosObtenidos)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, i) => (
            <tr key={i}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
