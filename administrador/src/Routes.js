import React from 'react'
import {Route} from "react-router-dom"
import CrearProductoView from "./views/CrearProductoView"
import ListaProductosView from "./views/ListaProductosView"
import EditarProductoView from "./views/EditarProductoView"
export default function Routes() {
    return (
        <div>
            <Route exact path="/" component={ListaProductosView} />
            <Route exact path="/crearproducto" component={CrearProductoView} />
            <Route exact path="/editarproducto/:id" component={EditarProductoView}/>
        </div>
    )
}
