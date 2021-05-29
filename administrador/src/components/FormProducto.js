import React, { useState, useEffect, useRef } from "react";

export default function FormProducto({value, actualizarInput, setValue, manejarSubmit}) {
 
  const inputColor = useRef();
  const inputFotos = useRef();

  const anadirColor = (e) => {
    e.preventDefault();
    let nuevocolor = inputColor.current.value;
    setValue({...value, colores:[...value.colores, nuevocolor]});
  };

  const anadirFoto = (e) => {
      e.preventDefault()
      let nuevaFoto = inputFotos.current.value;
      setValue({...value, fotos:[...value.fotos, nuevaFoto]})
  }

  return (
    <div>
      <form onSubmit={(e)=> {manejarSubmit(e)}}>
        <div>
          <label>Nombre</label>
          <input type="text" className="form-control" name="nombre" 
          value={value.nombre}
          onChange={(e)=>{actualizarInput(e)}}/>
        </div>

        <div>
          <label>Descripcion</label>
          <input type="text" className="form-control" name="descripcion"
          value={value.descripcion}
          onChange={(e)=>{actualizarInput(e)}}/>
        </div>

        <div>
          <label>Precio</label>
          <input type="number" className="form-control"
          name="precio" 
          value={value.precio}
          onChange={(e)=>{actualizarInput(e)}}/>
        </div>

        <div>
          <label>Stock</label>
          <input type="number" className="form-control" 
          name="stock"
          value={value.stock}
          onChange={(e)=>{actualizarInput(e)}}/>
        </div>

        <div>
          <label>Colores</label>
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
      <div>
          <label>Fotos</label>
          <input type="text"
          ref={inputFotos}
          className="form-control"/>
          <button className="btn btn-primary btn-sm" onClick={(e)=>{anadirFoto(e)}}> Agregar Foto</button>
          <ul className="list-group">
                  {value.fotos.map((fotito, i)=>(
                      <li className="list-group-item" key={i}>{fotito}</li>
                  ))}
          </ul>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary "> Guardar</button>
      </div>
      </form>
    </div>
  );
}
