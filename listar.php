<?php
// Conectar a la base de datos
$db = new SQLite3('mi_base_de_datos.db');

// Consulta para obtener todos los registros de la tabla
$result = $db->query('SELECT * FROM mi_tabla');

// Comprobar si hay registros
if ($result) {
    echo "<table border='1'>
            <tr>
                <th>Nombre</th>
                <th>Segundo</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Fecha</th>
                <th>Hora Inicio</th>
                <th>Hora Fin</th>
                <th>Turnos</th>
                <th>Calle</th>
                <th>Colonia</th>
                <th>Num Externo</th>
                <th>Municipio</th>
                <th>Estado</th>
                <th>Mensaje</th>
                <th>Acción</th>
            </tr>";

    while ($row = $result->fetchArray()) {
        echo "<tr>";
        echo "<td>{$row['nombre']}</td>";
        echo "<td>{$row['segundo']}</td>";
        echo "<td>{$row['apellido']}</td>";
        echo "<td>{$row['telefono']}</td>";
        echo "<td>{$row['fecha']}</td>";
        echo "<td>{$row['horaInicio']}</td>";
        echo "<td>{$row['horaFin']}</td>";
        echo "<td>{$row['turnos']}</td>";
        echo "<td>{$row['calle']}</td>";
        echo "<td>{$row['colonia']}</td>";
        echo "<td>{$row['numExterno']}</td>";
        echo "<td>{$row['municipio']}</td>";
        echo "<td>{$row['estado']}</td>";
        echo "<td>{$row['mensaje']}</td>";
        echo "<td><a href='eliminar.php?nombre={$row['nombre']}'>Eliminar</a></td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "No hay registros.";
}

// Cerrar la conexión a la base de datos
$db->close();
?>
