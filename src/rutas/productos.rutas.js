  import { Router } from 'express'
  import {insertarI,loginController,consultarUsuariosController,insertarAdminController,insertarUsuarioController,insertarConductorController,
  insertarPasajeroController, eliminarUsuarioController} from '../controllers/productos.controller'

  const upload = require('../libs/storage')
  const router = Router()

  router.post("/consultarU", loginController) //consultar usuario para el login
  router.get("/consultarAll", consultarUsuariosController) //consultar usuario para el login
  router.post("/insertarI", upload.single('image'), insertarI)//Insertar Imagen
  router.post("/insertarAdmin", insertarAdminController)//insertar administrador
  router.post("/insertarConductor", insertarConductorController)//insertar conductor
  router.post("/insertarPasajero", insertarPasajeroController)//insertar conductor
  router.post("/insertarUsuario", insertarUsuarioController)//insertar usuario
  router.get("/eliminarUsuario", eliminarUsuarioController)//eliminar usuario

  export default router