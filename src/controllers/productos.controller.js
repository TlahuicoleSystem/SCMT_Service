import {loginService,consultarUsuariosService,insertarAdminService,insertarUsuarioService, insertarConductorService, insertarPasajeroService,
eliminarUsuarioService, consultarUsuarioService, actualizarAdminService, actualizarCondcutorService, actualizarPasajeroService, actualizarUsuarioService,
consultarRutasService, consultarRutaService, consultarConductoresService,insertarRutaService,eliminarRutaService,actualizarRutaService,consultarPasajerosRutaService,
consultarPasajerosService,insertarPasajeroRutaService,eliminarPasajeroRutaService, consultarIncidenciasService, insertarIncidenciaService,} from '../servicios/productos.servicio'

//Construir la url de la imagen y regresarla
export const insertarI = async (req, res) => {
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


export const loginController = async (req, res) => {
    let respuesta = null
    let status = null
    console.log(req.body)
    try {
        const { usuario } = req.body
        const { contraseña } = req.body
        const id = await loginService(usuario, contraseña)
        if (id === "rol no encontrado") {
            respuesta = {
                success: false,
                data: null,
                message: "No se encontraron usuarios"
            }
        } else {
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

export const consultarUsuarioController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        const idd = await consultarUsuarioService(id)
        if (idd === "rol no encontrado") {
            respuesta = {
                success: false,
                data: null,
                message: "No se encontraron usuarios"
            }
        } else {
            respuesta = {
                success: true,
                data: idd,
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


export const consultarUsuariosController = async (req, res) => {
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

export const insertarAdminController = async (req, res) => {
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

export const insertarConductorController = async (req, res) => {
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

export const insertarPasajeroController = async (req, res) => {
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

export const insertarUsuarioController = async (req, res) => {
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

export const eliminarUsuarioController = async (req, res) => {
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

export const actualizarAdminController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        const administrador = req.body
        await actualizarAdminService(administrador, id)
        respuesta = {
            success: true,
            data: null,
            message: "administrador actualizado"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "administrador no actualizado",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const actualizarConductorController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        const conductor = req.body
        await actualizarCondcutorService(conductor, id)
        respuesta = {
            success: true,
            data: null,
            message: "conductor actualizado"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "conductor no actualizado",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}
export const actualizarPasajeroController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        const pasajero = req.body
        await actualizarPasajeroService(pasajero, id)
        respuesta = {
            success: true,
            data: null,
            message: "pasajero actualizado"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "pasajero no actualizado",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const actualizarUsuarioController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        const usuario = req.body
        await actualizarUsuarioService(usuario, id)
        respuesta = {
            success: true,
            data: null,
            message: "usuario actualizado"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "usuario no actualizado",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const consultarRutasController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { compania } = req.query
        const id = await consultarRutasService(compania)
        respuesta = {
            success: true,
            data: id,
            message: "Rutas encontradas"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "No se encontraron rutas"
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const consultarRutaController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        const idd = await consultarRutaService(id)
        respuesta = {
            success: true,
            data: idd,
            message: "Rutas encontradas"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "No se encontraron rutas"
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const consultarConductoresController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { compania } = req.query
        const id = await consultarConductoresService(compania)
        respuesta = {
            success: true,
            data: id,
            message: "Conductores encontrados"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "No se encontraron conductores"
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const insertarRutaController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const ruta = req.body
        const id = await insertarRutaService(ruta)
        respuesta = {
            success: true,
            data: id,
            message: "Ruta agregada"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "Ruta no agregada",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const eliminarRutaController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        await eliminarRutaService(id)
        respuesta = {
            success: true,
            data: null,
            message: "Ruta eliminada"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "Ruta no eliminada ",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const actualizarRutaController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        const ruta = req.body
        await actualizarRutaService(ruta, id)
        respuesta = {
            success: true,
            data: null,
            message: "Ruta actualizada"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "Ruta no actualizada",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}
export const consultarPasajerosRutaController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        const idd = await consultarPasajerosRutaService(id)
        respuesta = {
            success: true,
            data: idd,
            message: "Pasajeros encontrados"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "No se encontraron pasajeros"
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const consultarPasajerosController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const { compania } = req.query
        const id = await consultarPasajerosService(compania)
        respuesta = {
            success: true,
            data: id,
            message: "Pasajeros encontrados"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "No se encontraron pasajeros"
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const insertarPasajeroRutaController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const datos = req.body
        console.log(datos)
        const { ruta } = req.query
        const { pasajero } = req.query
        const id = await insertarPasajeroRutaService(pasajero,ruta,datos)
        respuesta = {
            success: true,
            data: id,
            message: "Ruta agregada"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "Ruta no agregada",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const eliminarPasajeroRutaController = async(req, res) => {
    let respuesta = null
    let status = null
    try {
        const { id } = req.query
        await eliminarPasajeroRutaService(id)
        respuesta = {
            success: true,
            data: null,
            message: "Eliminar pasajero de la ruta"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "Pasajero no eliminado ",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const consultarIncidenciasController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const { rutas } = req.query
        const idd = await consultarIncidenciasService(rutas)
        respuesta = {
            success: true,
            data: idd,
            message: "Incidencias encontradas"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "No se encontraron Incidencias"
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}

export const insertarIncidenciaController = async (req, res) => {
    let respuesta = null
    let status = null
    try {
        const incidencia = req.body
        const id = await insertarIncidenciaService(incidencia)
        respuesta = {
            success: true,
            data: id,
            message: "Incidencia agregada"
        }
        status = 200
    } catch (e) {
        respuesta = {
            success: false,
            data: null,
            message: "Incidencia no agregada",
            exception: e
        }
        status = 400
    }
    res.status(status)
    res.json(respuesta)
}