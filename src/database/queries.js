export const queries = {
    consultarc: 'SELECT nombre,primer_apellido,segundo_apellido,tcompania_id,trol_id, tusuario_admin_id, tusuario_conductor_id, tusuario_pasajero_id FROM tusuario WHERE usuario = ? AND contraseña = ?',
    //favoritos: 'SELECT pedidos.codigoBarras, productos.foto, productos.nombre, productos.descripcion_breve, productos.precio, COUNT( pedidos.codigoBarras ) AS total FROM pedidos INNER JOIN productos ON pedidos.codigoBarras = productos.codigo_barras GROUP BY pedidos.codigoBarras ORDER BY total DESC',
    //buscar: 'SELECT codigo_barras, foto, nombre, descripcion_breve, precio FROM productos WHERE nombre LIKE "%"?"%" ',
}