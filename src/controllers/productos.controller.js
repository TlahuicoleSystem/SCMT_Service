import {consultarUsuarioService} from '../servicios/productos.servicio'


//Construir la url de la imagen y regresarla
export const insertarI = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const { filename } = req.file
        const ruta = "http://localhost:5000/public/" + filename
        console.log(filename)
        respuesta = {
            success: true,
            data: ruta,
            message: "Imagen insertada"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: true,
            data: null,
            message: "Imagen no insertada",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const consultarUsuarioController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const { usuario } = req.body
        const { contraseña } = req.body
        const id = await consultarUsuarioService(usuario, contraseña)
        if (id === "rol no encontrado"){
            respuesta = {
                success: true,
                data: null,
                message: "Lo sentimos, rol no valido"
            }
        }else{
            respuesta = {
                success: true,
                data: id,
                message: "Usuario encontrado"
            }
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "No se encontraron usuarios"
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}
