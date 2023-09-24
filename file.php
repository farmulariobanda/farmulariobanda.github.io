<?php
// Conectar a la base de datos SQLite
$db = new SQLite3('mi_base_de_datos.db');

// Realizar una consulta para obtener todos los registros de la tabla
$queryAll = $db->query('SELECT nombre, segundo, apellido, telefono, fecha, horaInicio, horaFin, turnos, calle, colonia, municipio, estado, numExterno FROM mi_tabla');

// Crear un arreglo para almacenar todos los datos
$dataAll = array();

while ($row = $queryAll->fetchArray(SQLITE3_ASSOC)) {
    $dataAll[] = $row;
}

// Cerrar la conexión a la base de datos
$db->close();

// Devolver los datos de la consulta completa como JSON
echo json_encode($dataAll);
?>
