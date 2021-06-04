import axios from "axios"
import fire,{storage} from './firebase'

const URL = "https://609f10635f32be00171cd34d.mockapi.io/Productos"
// const URL = `${process.env.REACT_APP_URL_API}/Productos`


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

const subirArchivo = (imagen)=>{
    return new Promise ((resolve, reject)=>{
        let refStorage = storage.ref(`fotos/${imagen.name}`)

        let tareaSubida = refStorage.put(imagen)
    // Comenzamos a escuchar
        tareaSubida.on('state_changed', 
        // escuchar el progreso
        ()=>{},
        // manejar errores
        (error)=>{reject(error)},
        // me da la URL de descargas
        ()=>{
            tareaSubida.snapshot.ref.getDownloadURL()
            .then((urlImagen)=>{
                resolve(urlImagen)
            })
        }
        )
    })
    
}
export{
    obtenerProductos,
    crearProducto,
    editarProducto,
    obtenerProductosPorId,
    subirArchivo
}
