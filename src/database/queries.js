export const queries = {
    consultarc: 'SELECT id,nombre, primer_apellido, segundo_apellido,tcompania_id,trol_id, tusuario_admin_id, tusuario_conductor_id, tusuario_pasajero_id FROM tusuario WHERE usuario = ? AND contraseña = ? AND estado = 1',

    consultarAll: 'SELECT * FROM tusuario WHERE tcompania_id = ? AND estado = 1',
    consultarUsuario: 'SELECT nombre, primer_apellido, segundo_apellido, trol_id, tusuario_admin_id, tusuario_conductor_id, tusuario_pasajero_id, usuario, contraseña FROM tusuario WHERE id = ?  AND estado = 1',
    consultarA: 'SELECT * FROM tusuario_admin WHERE id = ? AND estado = 1',
    consultarC: 'SELECT id_empleado, fotografia, direccion, telefono, id_licencia FROM tusuario_conductor WHERE id = ? AND estado = 1',
    consultarP: 'SELECT id_pasajero, fotografia, telefono, area, jefe_inmediato, turno FROM tusuario_pasajero WHERE id = ? AND estado = 1',

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
    consultarRutasCondcutor: 'SELECT id, nombre FROM truta WHERE tusuario_id_conductor = ? AND estado = 1',
    consultarRutasPasajero: 'SELECT truta_usuario.truta_id AS "id", truta.nombre AS "nombre" FROM truta_usuario INNER JOIN truta ON truta_usuario.truta_id = truta.id  WHERE truta_usuario.tusuario_id = ? AND truta_usuario.estado = 1;',
    insertarRuta: 'INSERT INTO truta set ?',
    eliminarRuta: 'UPDATE truta SET estado = 0 WHERE id = ?',
    actualizarRuta: 'UPDATE truta set ? WHERE id = ?',

    consultarPasajerosRuta: 'SELECT truta_usuario.id, tusuario.nombre, tusuario.primer_apellido, tusuario.segundo_apellido FROM truta_usuario INNER JOIN tusuario ON truta_usuario.tusuario_id = tusuario.id WHERE truta_usuario.truta_id = ? AND truta_usuario.estado = 1',
    consultarPasajeros: 'SELECT id, nombre, primer_apellido, segundo_apellido FROM  tusuario  WHERE tcompania_id = ? AND estado = 1 AND trol_id = 3',
    isPasajeroRuta: 'SELECT EXISTS(SELECT * from truta_usuario WHERE tusuario_id = ? AND truta_id = ? AND estado = 1) as resultado',
    insertarPasajeroRuta: 'INSERT INTO truta_usuario set ?',
    eliminarPasajeroRuta: 'UPDATE truta_usuario SET estado = 0 WHERE id = ?',
    //favorits: 'SELECT pedidos.codigoBarras, productos.foto, productos.nombre, productos.descripcion_breve, productos.precio, COUNT( pedidos.codigoBarras ) AS total FROM pedidos INNER JOIN productos ON pedidos.codigoBarras = productos.codigo_barras GROUP BY pedidos.codigoBarras ORDER BY total DESC',
    //buscar: 'SELECT codigo_barras, foto, nombre, descripcion_breve, precio FROM productos WHERE nombre LIKE "%"?"%" ',

    consultarIncidencias: 'SELECT * FROM tincidente WHERE truta_id = ? AND estado = 1',
    insertarIncidencias: 'INSERT INTO tincidente set ?',
    consultarRutasIncidencias: 'SELECT tincidente.id AS "id_incidente", truta.nombre AS "nombre_ruta", tincidente.nombre AS "nombre_incidente", tincidente.descripcion, tincidente.fecha, tincidente.hora FROM tincidente INNER JOIN truta_usuario ON tincidente.truta_id = truta_usuario.truta_id INNER JOIN truta ON tincidente.truta_id = truta.id WHERE truta_usuario.tusuario_id = 6 AND truta.estado = 1 AND truta_usuario.estado = 1 ORDER BY tincidente.fecha DESC',
    eliminarIncidencia: 'UPDATE tincidente SET estado = 0 WHERE id = ?',

    consultarInformeIncidencia: 'SELECT tusuario.nombre, tusuario.primer_apellido, tusuario.segundo_apellido, tincidente.nombre AS "nombre_incidente", tincidente.descripcion, tincidente.fecha, tincidente.hora, truta.nombre AS "nombre_ruta" FROM tincidente INNER JOIN tusuario ON tincidente.tusuario_id = tusuario.id INNER JOIN truta ON tincidente.truta_id = truta.id WHERE tincidente.fecha BETWEEN ? AND ? AND tincidente.estado = 1',
    consultarInformeAsistencia: 'SELECT tusuario.nombre, tusuario.primer_apellido, tusuario.segundo_apellido, tusuario_pasajero.area, tusuario_pasajero.jefe_inmediato, truta.nombre AS "nombre_ruta", tasistencia.fecha, tasistencia.hora FROM tasistencia INNER JOIN tusuario ON tasistencia.tusuario_id = tusuario.id INNER JOIN tusuario_pasajero ON tusuario.tusuario_pasajero_id = tusuario_pasajero.id INNER JOIN truta ON tasistencia.truta_id = truta.id WHERE tasistencia.fecha BETWEEN ? AND ? AND tasistencia.estado = 1',
    
    insertarAsistencias: 'INSERT INTO tasistencia set ?',
    // consultarInformeRutas: 'SELECT * FROM truta WHERE '
}