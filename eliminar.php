<?php
// Conectar a la base de datos
$db = new SQLite3('mi_base_de_datos.db');

// Verificar si se ha enviado un nombre válido a través de la URL
if (isset($_GET['nombre']) && !empty($_GET['nombre'])) {
    $nombre = $_GET['nombre'];
    
    // Preparar la consulta para eliminar el registro
    $stmt = $db->prepare('DELETE FROM mi_tabla WHERE nombre = :nombre');
    $stmt->bindValue(':nombre', $nombre, SQLITE3_TEXT);
    
    // Ejecutar la consulta
    $result = $stmt->execute();
    
    // Verificar el número de filas afectadas
    $filas_afectadas = $db->changes();
    
    if ($filas_afectadas > 0) {
        echo "Registro eliminado correctamente.";
    } else {
        echo "Error al eliminar el registro o el registro no existe.";
    }
    
    // Cerrar la conexión a la base de datos
    $db->close();
} else {
    echo "Nombre no válido.";
}
?>
