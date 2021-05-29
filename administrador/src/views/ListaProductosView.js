import React, { useEffect, useState } from "react";
import { obtenerProductos } from "../services/productoServices";
import {Link} from "react-router-dom"

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
      <h1>Productos Listados</h1>
      <Link className="btn btn-primary btn-lg my-2" to="/crearproducto">Crear Producto</Link>
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
              <td>
                <Link className="btn btn-warning btn-sm" to ={`/editarproducto/${producto.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
