import { getConnetion } from '../database/database'
import { queries } from '../database/queries'

//Login
export const loginService = async(usuario, contraseña) => {
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
    obj_unidos = Object.assign(respuesta[0],complemento[0]);
    return obj_unidos
}

export const consultarUsuariosService = async(compañia) => {
    let respuesta = null
    try {
        const conn = await getConnetion()
        respuesta = await conn.query(queries.consultarAll, compañia) 
    } catch (e) {
        throw e.message
    }
    return respuesta
}

export const consultarUsuarioService = async(id) => {
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
    obj_unidos = Object.assign(respuesta[0],complemento[0]);
    return obj_unidos
}

export const insertarAdminService = async(admin) => {
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

export const insertarConductorService = async(conductor) => {
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

export const insertarPasajeroService = async(pasajero) => {
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

export const insertarUsuarioService = async(usuario) => {
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

export const actualizarAdminService = async(administrador, id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.actualizarA, [administrador, id])
    } catch (e) {
        throw e.message
    }
}

export const actualizarCondcutorService = async(conductor, id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.actualizarC, [conductor, id])
    } catch (e) {
        throw e.message
    }
}
export const actualizarPasajeroService = async(pasajero, id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.actualizarP, [pasajero, id])
    } catch (e) {
        throw e.message
    }
}

export const actualizarUsuarioService = async(usuario, id) => {
    try {
        const conn = await getConnetion()
        await conn.query(queries.actualizarUsuario, [usuario, id])
    } catch (e) {
        throw e.message
    }
}

