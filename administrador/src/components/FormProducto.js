import React, { useRef } from "react";
import { subirArchivo } from "../services/productoServices";

// Esta variable me va a permitir, manejar mi archivo sin problemas.
let imagenes;

const asyncForEach = async (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i]);
  }
};

export default function FormProducto({
  value,
  actualizarInput,
  setValue,
  manejarSubmit,
  categorias,
}) {
  console.log({ categorias });

  const inputColor = useRef();
  const inputFotos = useRef();

  const anadirColor = (e) => {
    e.preventDefault();
    let nuevocolor = inputColor.current.value;
    setValue({ ...value, colores: [...value.colores, nuevocolor] });
  };

  const ejecutarSubmit = async (e) => {
    e.preventDefault();
    let urls = [];

    await asyncForEach(imagenes, async (imagen) => {
      let urlImagenSubida = await subirArchivo(imagen);
      urls.push(urlImagenSubida);
    });
    manejarSubmit(e, urls);
  };

  const manejarImagen = (e) => {
    e.preventDefault();
    let misImagenes = e.target.files;
    imagenes = misImagenes;
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          ejecutarSubmit(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={value.nombre}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            value={value.descripcion}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            value={value.precio}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={value.stock}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Colores</label>
          <input type="color" className="form-control" ref={inputColor} />
          <button
            className="btn btn-primary btn-sm"
            onClick={(e) => {
              anadirColor(e);
            }}
          >
            Agregar Color
          </button>
          <div className="list-group">
            {value.colores.map((color, i) => (
              <div className="list-group-item list-group-item-sm" key={i}>
                Color:{" "}
                <span
                  style={{
                    border: "1px solid gray",
                    background: `${color}`,
                    color: `${color}`,
                  }}
                >
                  {color}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Fotos</label>
          <input
            type="file"
            ref={inputFotos}
            className="form-control"
            onChange={(e) => {
              manejarImagen(e);
            }}
            multiple
          />
          {/* <button
            className="btn btn-primary btn-sm"
            onClick={(e) => {
              anadirFoto(e);
            }}
          >
            Agregar Foto
          </button> */}
          <ul className="list-group">
            {value.fotos.map((fotito, i) => (
              <li className="list-group-item" key={i}>
                {fotito}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-3">
          <label className="form-label">Categorias</label>
          {/* <input type="text" list="categorias" className="form-control" 
          name="id_categoria"
          value={value.id_categoria}
          onChange={(e) => {actualizarInput(e)}}/>
          <datalist id="categorias">
            {categorias.map((cat, i) => (
              <option key={i} value={cat.id}>{cat.nombre}</option>
            ))} 
          </datalist> */}

          <select
            className="form-control"
            name="id_categoria"
            value={value.id_categoria}
            onChange={(e) => {
              actualizarInput(e);
            }}
          >
            {categorias.map((cat, i) => (
              <option key={i} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary ">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
