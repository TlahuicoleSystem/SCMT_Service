  import { Router } from 'express'
  import {insertarI,consultarUsuarioController} from '../controllers/productos.controller'

  const upload = require('../libs/storage')
  const router = Router()

  router.post("/consultarU", consultarUsuarioController) //consultar usuario para el login
  router.post("/insertarI", upload.single('image'), insertarI)//Insertar Imagen

  export default router