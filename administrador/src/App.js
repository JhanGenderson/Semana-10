import React from 'react'
import ListaProductosView from "./views/ListaProductosView"
import CrearProductoView from "./views/CrearProductoView"

export default function App() {
  return (
    <div className="container p-3">
      <ListaProductosView/>
      <CrearProductoView/>
    </div>
  )
}
