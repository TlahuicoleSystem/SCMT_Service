export const queries = {
    consultarc: 'SELECT id,nombre,tcompania_id,trol_id, tusuario_admin_id, tusuario_conductor_id, tusuario_pasajero_id FROM tusuario WHERE usuario = ? AND contraseña = ? AND estado = 1',
    consultarAll: 'SELECT * FROM tusuario WHERE tcompania_id = ? AND estado = 1',
    consultarA: 'SELECT * FROM tusuario_admin WHERE id = ? AND estado = 1',
    consultarC: 'SELECT * FROM tusuario_conductor WHERE id = ? AND estado = 1',
    consultarP: 'SELECT * FROM tusuario_pasajero WHERE id = ? AND estado = 1',
    insertarAdmin: 'INSERT INTO tusuario_admin set ?',
    insertarConductor: 'INSERT INTO tusuario_conductor set ?',
    insertarPasajero: 'INSERT INTO tusuario_pasajero set ?',
    insertarUsuario: 'INSERT INTO tusuario set ?',
    eliminarUsuario: 'UPDATE tusuario SET estado = 0 WHERE id = ?',
    //favorits: 'SELECT pedidos.codigoBarras, productos.foto, productos.nombre, productos.descripcion_breve, productos.precio, COUNT( pedidos.codigoBarras ) AS total FROM pedidos INNER JOIN productos ON pedidos.codigoBarras = productos.codigo_barras GROUP BY pedidos.codigoBarras ORDER BY total DESC',
    //buscar: 'SELECT codigo_barras, foto, nombre, descripcion_breve, precio FROM productos WHERE nombre LIKE "%"?"%" ',
}