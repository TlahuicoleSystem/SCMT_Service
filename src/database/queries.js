export const queries = {
    consultarc: 'SELECT id,nombre, primer_apellido, segundo_apellido,tcompania_id,trol_id, tusuario_admin_id, tusuario_conductor_id, tusuario_pasajero_id FROM tusuario WHERE usuario = ? AND contraseña = ? AND estado = 1',
    
    consultarAll: 'SELECT * FROM tusuario WHERE tcompania_id = ? AND estado = 1',
    consultarUsuario: 'SELECT nombre, primer_apellido, segundo_apellido, trol_id, tusuario_admin_id, tusuario_conductor_id, tusuario_pasajero_id, usuario, contraseña FROM tusuario WHERE id = ?  AND estado = 1',
    consultarA: 'SELECT * FROM tusuario_admin WHERE id = ? AND estado = 1',
    consultarC: 'SELECT * FROM tusuario_conductor WHERE id = ? AND estado = 1',
    consultarP: 'SELECT * FROM tusuario_pasajero WHERE id = ? AND estado = 1',

    insertarAdmin: 'INSERT INTO tusuario_admin set ?',
    insertarConductor: 'INSERT INTO tusuario_conductor set ?',
    insertarPasajero: 'INSERT INTO tusuario_pasajero set ?',
    insertarUsuario: 'INSERT INTO tusuario set ?',
    eliminarUsuario: 'UPDATE tusuario SET estado = 0 WHERE id = ?',
    actualizarA: 'UPDATE tusuario_admin set ? WHERE id = ?',
    actualizarC: 'UPDATE tusuario_conductor set ? WHERE id = ?',
    actualizarP: 'UPDATE tusuario_pasajero set ? WHERE id = ?',
    actualizarUsuario: 'UPDATE tusuario set ? WHERE id = ?',
  
    consultarRutas: 'SELECT truta.id, truta.tcompania_id, truta.tusuario_id_conductor, truta.nombre AS "nombre_ruta", truta.descripcion, truta.punto_acceso, truta.vehiculo, tusuario.nombre, tusuario.primer_apellido, tusuario.segundo_apellido FROM truta INNER JOIN tusuario ON truta.tusuario_id_conductor = tusuario.id WHERE truta.tcompania_id = ? AND truta.estado = 1',
    consultarRuta: 'SELECT truta.id, truta.tcompania_id, truta.tusuario_id_conductor, truta.nombre AS "nombre_ruta", truta.descripcion, truta.punto_acceso, truta.vehiculo, tusuario.nombre, tusuario.primer_apellido, tusuario.segundo_apellido FROM truta INNER JOIN tusuario ON truta.tusuario_id_conductor = tusuario.id WHERE truta.id = ? AND truta.estado = 1 ',
    consultarConductores: 'SELECT id, nombre, primer_apellido, segundo_apellido FROM  tusuario  WHERE tcompania_id = ? AND estado = 1 AND trol_id = 2',
    insertarRuta: 'INSERT INTO truta set ?',
    eliminarRuta: 'UPDATE truta SET estado = 0 WHERE id = ?',
    actualizarRuta: 'UPDATE truta set ? WHERE id = ?',
    
    consultarPasajerosRuta: 'SELECT truta_usuario.id, tusuario.nombre, tusuario.primer_apellido, tusuario.segundo_apellido FROM truta_usuario INNER JOIN tusuario ON truta_usuario.tusuario_id = tusuario.id WHERE truta_usuario.truta_id = ? AND truta_usuario.estado = 1',
    consultarPasajeros:'SELECT id, nombre, primer_apellido, segundo_apellido FROM  tusuario  WHERE tcompania_id = ? AND estado = 1 AND trol_id = 3',
    isPasajeroRuta:'SELECT EXISTS(SELECT * from truta_usuario WHERE tusuario_id = ? AND truta_id = ? AND estado = 1) as resultado',
    insertarPasajeroRuta: 'INSERT INTO truta_usuario set ?', 
    eliminarPasajeroRuta: 'UPDATE truta_usuario SET estado = 0 WHERE id = ?',
    //favorits: 'SELECT pedidos.codigoBarras, productos.foto, productos.nombre, productos.descripcion_breve, productos.precio, COUNT( pedidos.codigoBarras ) AS total FROM pedidos INNER JOIN productos ON pedidos.codigoBarras = productos.codigo_barras GROUP BY pedidos.codigoBarras ORDER BY total DESC',
    //buscar: 'SELECT codigo_barras, foto, nombre, descripcion_breve, precio FROM productos WHERE nombre LIKE "%"?"%" ',

    consultarIncidencias: 'SELECT * FROM tincidente WHERE truta_id = ? AND estado = 1',
    insertarIncidencias: 'INSERT INTO tincidente set ?',
}