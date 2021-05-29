import React, {useState, useEffect} from 'react'
import FormProducto from "../components/FormProducto"
import {editarProducto, obtenerProductosPorId} from "../services/productoServices"
import {useParams} from "react-router-dom"

export default function EditarProductoView() {

    let {id} = useParams();

    const [value, setValue] = useState({
        nombre:'',
        descripcion:'',
        stock:0,
        precio:0,
        colores:[],
        fotos:[]
    })
    const actualizarInput = (e) =>{
        e.preventDefault()
        setValue({...value, 
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()
        await editarProducto(value, id)
    }

    const getProducto = async() =>{
        try{
          let productoObtenido = await obtenerProductosPorId(id)
          setValue({...productoObtenido})
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getProducto();
    }, [])

    return (
        <div>
        <h1>Editar Producto</h1>
        <FormProducto
        value={value}
        setValue={setValue}
        actualizarInput={actualizarInput}
        manejarSubmit={manejarSubmit}/>
        </div>
    )
}
