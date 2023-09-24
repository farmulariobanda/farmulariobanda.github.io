<?php
// Verifica si se recibieron datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopila los datos del formulario
    $nombre = $_POST["nombre"];
    $segundo = $_POST["segundo"];
    $apellido = $_POST["apellido"];
    $telefono = $_POST["telefono"];
    $fecha = $_POST["fecha"];
    $hora_inicio = $_POST["hora_inicio"];
    $hora_fin = $_POST["hora_fin"];
    $turnos = $_POST["turnos"];
    $calle = $_POST["calle"];
    $colonia = $_POST["colonia"];
    $num_externo = $_POST["num_externo"];
    $municipio = $_POST["municipio"];
    $estado = $_POST["estado"];
    $mensaje = $_POST["mensaje"];

    // Conexión a la base de datos SQLite
    $db = new SQLite3("mi_base_de_datos.db");

    // Inserta los datos en la tabla correspondiente (ajusta el nombre de la tabla según tu base de datos)
    $query = "INSERT INTO mi_tabla (nombre, segundo, apellido, telefono, fecha, horaInicio, horaFin, turnos, calle, colonia, numExterno, municipio, estado, mensaje) VALUES ('$nombre', '$segundo', '$apellido', '$telefono', '$fecha', '$hora_inicio', '$hora_fin', '$turnos', '$calle', '$colonia', '$num_externo', '$municipio', '$estado', '$mensaje')";

    $resultado = $db->exec($query);

    if ($resultado) {
        // Datos guardados correctamente, muestra una alerta al usuario
        echo "Datos guardados correctamente. le enviaremos su contrato en la brevedad posible.";
    } else {
        // Error al guardar los datos, muestra una alerta al usuario con el mensaje de error
        echo "Error al guardar los datos:";
    }

    // Cierra la conexión a la base de datos
    $db->close();
} else {
    echo "No se recibieron datos del formulario.";
}
?>
