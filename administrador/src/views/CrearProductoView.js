import React, { useState, useEffect } from "react";
import FormProducto from "../components/FormProducto";
import { crearProducto } from "../services/productoServices";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { obtenerCategorias } from "../services/categoriaService";

export default function CrearProductoView() {
  const [value, setValue] = useState({
    nombre: "",
    descripcion: "",
    precio: "0",
    stock: "0",
    fotos: [],
    colores: [],
    id_categoria:1
  });

  const [categorias, setCategorias] = useState([]);

  const history = useHistory();

  const actualizarInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const getCategorias = async () => {
    try {
      let categoriasObtenidas = await obtenerCategorias();
      setCategorias([...categoriasObtenidas]);
    } catch (error){
      console.log(error);
    }
  };



  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearProducto({ ...value });
      Swal.fire({
        icon: "success",
        title: "Producto Creado Exitosamente",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
      getCategorias()
  },[])

  return (
    <div>
      <h1>Crear Producto</h1>
      <FormProducto
        value={value}
        actualizarInput={actualizarInput}
        setValue={setValue}
        manejarSubmit={manejarSubmit}
        categorias={categorias}
      />
    </div>
  );
}
