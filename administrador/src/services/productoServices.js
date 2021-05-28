import axios from "axios"

const URL = 
`${process.env.REACT_APP_URL_API}/Productos`

const obtenerProductos = async () =>{
    try{
        let {data} = await axios.get(URL)
        return data
    }
    catch(error){
        throw error
    }
}

const crearProducto = async(nuevoProducto) =>{
    try{
        let headers = {
            "Content-Type":"application/json"
        }

        let {data} = await axios.post(URL, nuevoProducto, {headers})
        return data
    } catch (error){
        throw error
    }
}

export{
    obtenerProductos,
    crearProducto
}
