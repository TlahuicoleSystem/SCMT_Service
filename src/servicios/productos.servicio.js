import { getConnetion } from '../database/database'
import { queries } from '../database/queries'


//consultar cliente
export const consultarUsuarioService = async(usuario, contraseña) => {
    let data = null
    try {
        const conn = await getConnetion()
        data = await conn.query(queries.consultarc, [usuario, contraseña])
        switch (data[0].trol_id) {
            case 1:
                console.log("entro en el admin")
                break;
            case 2:
                console.log("entro en el conductor")
                break;
            case 3:
                console.log("entro en el pasajero")
                break;
            default:
                data = "rol no encontrado"
                break;
        }
    } catch (e) {
        throw e.message
    }
    return data
}

