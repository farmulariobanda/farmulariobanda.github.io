<?php
function obtenerNombresCompletos() {
    try {
        // Conexión a la base de datos (ajusta la cadena de conexión según tus credenciales)
        $dbh = new PDO('sqlite:mi_base_de_datos.db');

        // Preparar la consulta SQL
        $stmt = $dbh->prepare("SELECT nombre || ' ' || segundo || ' ' || apellido AS nombre_completo FROM mi_tabla");

        // Ejecutar la consulta
        $stmt->execute();

        // Obtener los nombres completos en un array
        $nombresCompletos = $stmt->fetchAll(PDO::FETCH_COLUMN);

        // Cerrar la conexión a la base de datos
        $dbh = null;

        return $nombresCompletos;
    } catch (PDOException $e) {
        // En caso de error, puedes manejarlo aquí
        echo "Error: " . $e->getMessage();
        return array(); // Retorna un array vacío en caso de error
    }
}

// Llamar a la función y almacenar los nombres completos en una variable
$nombresCompletos = obtenerNombresCompletos();

// Ahora $nombresCompletos contiene los nombres completos de la tabla
// Puedes acceder a ellos como un array regular
foreach ($nombresCompletos as $nombreCompleto) {
    echo $nombreCompleto . "<br>";
}
?>
