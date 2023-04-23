  import { Router } from 'express'
  import {insertarI,loginController,consultarUsuariosController,insertarAdminController,insertarUsuarioController,insertarConductorController,
  insertarPasajeroController, eliminarUsuarioController,consultarUsuarioController,actualizarAdminController, actualizarConductorController, actualizarPasajeroController,
  actualizarUsuarioController} from '../controllers/productos.controller'

  const upload = require('../libs/storage')
  const router = Router()

  router.post("/consultarU", loginController) //consultar usuario para el login
  router.get("/consultarAll", consultarUsuariosController) //consultar usuario para el login
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

  export default router