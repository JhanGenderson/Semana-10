import axios from "axios"

const URL = "https://609f10635f32be00171cd34d.mockapi.io/Productos"


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

const editarProducto = async(productoEditado, id) => {
    try{
        let headers = {
            "Content-Type":"application/json"
        }
        let {data} = await axios.put(`${URL}/${id}`, productoEditado, {headers})
        return data
    }
    catch (error){
        console.log(error)
    }
}

const obtenerProductosPorId= async(id) =>{
    try{
        let {data} = await axios.get(`${URL}/${id}`)
        return data
    }
    catch(error){
        console.log(error)
    }
}
export{
    obtenerProductos,
    crearProducto,
    editarProducto,
    obtenerProductosPorId
}
