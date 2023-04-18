import {loginService,consultarUsuariosService,insertarAdminService,insertarUsuarioService, insertarConductorService, insertarPasajeroService,
eliminarUsuarioService} from '../servicios/productos.servicio'


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


export const loginController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const { usuario } = req.body
        const { contraseña } = req.body
        const id = await loginService(usuario, contraseña)
        if (id === "rol no encontrado"){
            respuesta = {
                success: false,
                data: null,
                message: "No se encontraron usuarios"
            }
        }else{
            respuesta = {
                success: true,
                data: id,
                message: "Se encontro el usuario"
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


export const consultarUsuariosController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const { compania } = req.query
        const id = await consultarUsuariosService(compania)
        respuesta = {
            success: true,
            data: id,
            message: "Usuarios encontrados"
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

export const insertarAdminController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const admin = req.body
        const id = await insertarAdminService(admin)
        respuesta = {
            success: true,
            data: id,
            message: "administrador agregado"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "administrador no agregado",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const insertarConductorController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const conductor = req.body
        const id = await insertarConductorService(conductor)
        respuesta = {
            success: true,
            data: id,
            message: "conductor agregado"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "conductorr no agregado",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const insertarPasajeroController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const pasajero = req.body
        const id = await insertarPasajeroService(pasajero)
        respuesta = {
            success: true,
            data: id,
            message: "pasajero agregado"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "pasajero agregado",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const insertarUsuarioController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const usuario = req.body
        const id = await insertarUsuarioService(usuario)
        respuesta = {
            success: true,
            data: id,
            message: "usuario agregado"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "usuario no agregado",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const eliminarUsuarioController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        await eliminarUsuarioService(id)
        respuesta = {
            success: true,
            data: null,
            message: "usuario eliminado"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "usuario no eliminado ",
            exception: e
        }
        status = 400
    }

    res.status(status)
    res.json(respuesta)
}