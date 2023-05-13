import { getConnetion } from '../database/database'
import { queries } from '../database/queries'

//Login
export const loginService = async (usuario, contraseña) => {
    let respuesta = null
    let complemento = null
    let obj_unidos = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarc, [usuario, contraseña])
        switch (respuesta[0].trol_id) {
            case 1:
                complemento = await conn.query(queries.consultarA, [respuesta[0].tusuario_admin_id])
                break;
            case 2:
                complemento = await conn.query(queries.consultarC, [respuesta[0].tusuario_conductor_id])
                break;
            case 3:
                complemento = await conn.query(queries.consultarP, [respuesta[0].tusuario_pasajero_id])
                break;
            default:
                respuesta = "rol no encontrado"
                break;
        }
    } catch (e) {
        throw e.message
    }
    obj_unidos = Object.assign(respuesta[0], complemento[0]);
    return obj_unidos
}

export const consultarUsuariosService = async (compañia) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarAll, compañia)
    } catch (e) {
        throw e.message
    }
    return respuesta
}

export const consultarUsuarioService = async (id) => {
    let respuesta = null
    let complemento = null
    let obj_unidos = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarUsuario, id)
        switch (respuesta[0].trol_id) {
            case 1:
                complemento = await conn.query(queries.consultarA, [respuesta[0].tusuario_admin_id])
                break;
            case 2:
                complemento = await conn.query(queries.consultarC, [respuesta[0].tusuario_conductor_id])
                break;
            case 3:
                complemento = await conn.query(queries.consultarP, [respuesta[0].tusuario_pasajero_id])
                break;
            default:
                respuesta = "rol no encontrado"
                break;
        }
    } catch (e) {
        throw e.message
    }
    obj_unidos = Object.assign(respuesta[0], complemento[0]);
    return obj_unidos
}

export const insertarAdminService = async (admin) => {
    let idNewProduct = null
    try {
        const conn = await getConnetion()
        const result = await conn.query(queries.insertarAdmin, admin)
        idNewProduct = result.insertId
    } catch (e) {
        throw e.message
    }
    return idNewProduct
}

export const insertarConductorService = async (conductor) => {
    let idNewProduct = null
    try {
        const conn = await getConnetion()
        const result = await conn.query(queries.insertarConductor, conductor)
        idNewProduct = result.insertId
    } catch (e) {
        throw e.message
    }
    return idNewProduct
}

export const insertarPasajeroService = async (pasajero) => {
    let idNewProduct = null
    try {
        const conn = await getConnetion()
        const result = await conn.query(queries.insertarPasajero, pasajero)
        idNewProduct = result.insertId
    } catch (e) {
        throw e.message
    }
    return idNewProduct
}

export const insertarUsuarioService = async (usuario) => {
    let idNewProduct = null
    try {
        const conn = await getConnetion()
        const result = await conn.query(queries.insertarUsuario, usuario)
        idNewProduct = result.insertId
    } catch (e) {
        throw e.message
    }
    return idNewProduct
}

export const eliminarUsuarioService = async (id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.eliminarUsuario, id)
    } catch (e) {
        throw e.message
    }
}

export const actualizarAdminService = async (administrador, id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.actualizarA, [administrador, id])
    } catch (e) {
        throw e.message
    }
}

export const actualizarCondcutorService = async (conductor, id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.actualizarC, [conductor, id])
    } catch (e) {
        throw e.message
    }
}
export const actualizarPasajeroService = async (pasajero, id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.actualizarP, [pasajero, id])
    } catch (e) {
        throw e.message
    }
}

export const actualizarUsuarioService = async (usuario, id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.actualizarUsuario, [usuario, id])
    } catch (e) {
        throw e.message
    }
}

export const consultarRutasService = async (compañia) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarRutas, compañia)
    } catch (e) {
        throw e.message
    }
    return respuesta
}

export const consultarRutaService = async (id) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarRuta, id)
    } catch (e) {
        throw e.message
    }
    return respuesta
}

export const consultarConductoresService = async (compania) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarConductores, compania)
    } catch (e) {
        throw e.message
    }
    return respuesta
}

export const insertarRutaService = async (ruta) => {
    let idNewProduct = null
    try {
        const conn = await getConnetion()
        const result = await conn.query(queries.insertarRuta, ruta)
        idNewProduct = result.insertId
    } catch (e) {
        throw e.message
    }
    return idNewProduct
}

export const eliminarRutaService = async (id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.eliminarRuta, id)
    } catch (e) {
        throw e.message
    }
}
export const actualizarRutaService = async (ruta, id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.actualizarRuta, [ruta, id])
    } catch (e) {
        throw e.message
    }
}

export const consultarPasajerosRutaService = async (id) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarPasajerosRuta, id)
    } catch (e) {
        throw e.message
    }
    return respuesta
}
export const consultarPasajerosService = async (compania) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarPasajeros, compania)
    } catch (e) {
        throw e.message
    }
    return respuesta
}

export const insertarPasajeroRutaService = async (pasajero, ruta, datos) => {
    let idNewProduct = null
    try {
        const conn = await getConnetion()
        const result1 = await conn.query(queries.isPasajeroRuta, [pasajero, ruta])
        if (result1[0].resultado == 1) {
            idNewProduct = "Pasajero existente en la ruta"
        } else {
            const result = await conn.query(queries.insertarPasajeroRuta, datos)
            idNewProduct = result.insertId
            console.log(idNewProduct)
        }
    } catch (e) {
        throw e.message
    }
    return idNewProduct
}

export const eliminarPasajeroRutaService = async (id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.eliminarPasajeroRuta, id)
    } catch (e) {
        throw e.message
    }
}

export const consultarIncidenciasService = async (ruta) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarIncidencias, ruta)
    } catch (e) {
        throw e.message
    }
    return respuesta
}

export const insertarIncidenciaService = async (ruta) => {
    let idNewIncidencia = null
    try {
        const conn = await getConnetion()
        const result = await conn.query(queries.insertarIncidencias, ruta)
        idNewIncidencia = result.insertId
    } catch (e) {
        throw e.message
    }
    return idNewIncidencia
}

export const eliminarIncidenciaService = async (id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.eliminarIncidencia, id)
    } catch (e) {
        throw e.message
    }
}

export const consultarInformeIncidenciaService = async (inicio, fin) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarInformeIncidencia, [inicio, fin])
    } catch (e) {
        throw e.message
    }
    return respuesta
}

export const consultarInformeAsistenciaService = async (inicio, fin) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarInformeAsistencia, [inicio, fin])
    } catch (e) {
        throw e.message
    }
    return respuesta
}