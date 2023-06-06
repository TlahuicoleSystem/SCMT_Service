import { Router } from 'express'
import {
  insertarI, loginController, consultarUsuariosController, insertarAdminController, insertarUsuarioController, insertarConductorController,
  insertarPasajeroController, eliminarUsuarioController, consultarUsuarioController, actualizarAdminController, actualizarConductorController, actualizarPasajeroController,
  actualizarUsuarioController, consultarRutasController, consultarRutaController, consultarConductoresController, consultarRutasConductorController, insertarRutaController,
  eliminarRutaController, actualizarRutaController, consultarPasajerosRutaController, consultarPasajerosController, insertarPasajeroRutaController,
  eliminarPasajeroRutaController, consultarIncidenciasController, insertarIncidenciaController, eliminarIncidenciaController, consultarInformeIncidenciaController,
  consultarInformeAsistenciaController, consultarRutasIncidenciasController, insertarAsistenciaController
} from '../controllers/productos.controller'

const upload = require('../libs/storage')
const router = Router()

router.post("/consultarU", loginController) //consultar usuario para el login
router.get("/consultarAll", consultarUsuariosController) //consultar todos los usuarios
router.get("/consultarUsuario", consultarUsuarioController) //consultar usuario para el update
router.post("/insertarI", upload.single('image'), insertarI)//Insertar Imagen
router.post("/insertarAdmin", insertarAdminController)//insertar administrador
router.post("/insertarConductor", insertarConductorController)//insertar conductor
router.post("/insertarPasajero", insertarPasajeroController)//insertar conductor
router.post("/insertarUsuario", insertarUsuarioController)//insertar usuario
router.get("/eliminarUsuario", eliminarUsuarioController)//eliminar usuario
router.post("/actualizarAdmin", actualizarAdminController) //actualizar administrador
router.post("/actualizarConductor", actualizarConductorController) //actualizar conductor
router.post("/actualizarPasajero", actualizarPasajeroController) //actualizar conductor
router.post("/actualizarUsuario", actualizarUsuarioController) //actualizar administrador
router.get("/consultarRutas", consultarRutasController) //consultar todas las rutas
router.get("/consultarRuta", consultarRutaController) //consultar una ruta
router.get("/consultarConductores", consultarConductoresController) //consultar conductores para lista
router.get("/consultarRutasConductor", consultarRutasConductorController) //consultar las rutas de un conductor
router.post("/insertarRuta", insertarRutaController)//insertar ruta
router.get("/eliminarRuta", eliminarRutaController)//eliminar ruta
router.post("/actualizarRuta", actualizarRutaController) //actualizar ruta
router.get("/consultarPasajerosRuta", consultarPasajerosRutaController)
router.get("/consultarPasajeros", consultarPasajerosController)
router.post("/insertarPasajeroRuta", insertarPasajeroRutaController)
router.get("/consultarRutasIncidencias", consultarRutasIncidenciasController)
router.get("/eliminarPasajeroRuta", eliminarPasajeroRutaController)
router.get("/concultarIncidencias", consultarIncidenciasController) //consultar incidencias
router.post("/insertarIncidencia", insertarIncidenciaController) //insertar incidencia
router.get("/eliminarIncidencia", eliminarIncidenciaController) //eliminar incidencia
router.get("/consultarInformeIncidencia", consultarInformeIncidenciaController) //consultar informe de incidencias
router.get("/consultarInformeAsistencia", consultarInformeAsistenciaController) //consultar informe de asistencia

router.post("/insertarAsistencia", insertarAsistenciaController)


export default router