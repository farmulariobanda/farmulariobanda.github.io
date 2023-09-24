// generarPDF.js
function generarPDF() {
    // Obtener los valores de los campos de entrada
    var prestatario = document.getElementById('prestatario').value;
    var lema = document.getElementById('lema').value;
    var banda = document.getElementById('banda').value;
  var nombre = document.getElementById('nombre').value;
    var segundo = document.getElementById('segundo').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var fecha = document.getElementById('fecha').value;
    var horaInicio = document.getElementById('horaInicio').value;
    var horaFin = document.getElementById('horaFin').value;
    var turnos = document.getElementById('turnos').value;
    var calle = document.getElementById('calle').value;
    var colonia = document.getElementById('colonia').value;
    var numExterno = document.getElementById('numExterno').value;
    var municipio = document.getElementById('municipio').value;
    var estado = document.getElementById('estado').value;
    var precioFinal = document.getElementById('precioFinal').value;
    var porcentaje1 = document.getElementById('porcentaje1').value;
    var porcentaje2 = document.getElementById('porcentaje2').value;
    var precioPorcentaje1 = document.getElementById('precioPorcentaje1').value;
    var precioPorcentaje2 = document.getElementById('precioPorcentaje2').value;
    var precioLetra = document.getElementById('precioLetra').value;

    // Formatear la fecha en el formato deseado (dd, MM, yyyy)
    var fechaParts = fecha.split('-');
    var fechaFormateada = fechaParts[2] + ' del mes ' + fechaParts[1] + ' del año ' + fechaParts[0];

    // Crear un nuevo objeto de ventana emergente
    var ventanaEmergente = window.open('', '', 'width=600,height=600');

    // Construir el contenido HTML en la ventana emergente
    var contenidoHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
            <title>Contrato de Servicio - Banda Sinaloense</title>
             <style>
            .container {
                border: 3px solid black;
                padding: 20px; /* Espacio adicional para que el contenido no quede pegado al borde */
                    }
                     .container2{
                border: 5px solid white;
                padding: 20px; /* Espacio adicional para que el contenido no quede pegado al borde */
                    }
            </style>
        </head>
        <body>
        <div class="container">
            <div class="container2">
                <div class="row">
            <div class="col-md-6 text-left" style="color: red;">
                <p>Folio 8901</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center" style="font: bold;">
                <h3>${lema}</h3>
                <h5>${banda}</h5>
            </div>
        </div>

                <div class="row">
                     <div class="col-md-4 text-left">
                        <img src="Picsart.jpg" alt="Firma del Prestador" style="width: 40%;">
                    </div>
                    <div class="col-md-8 text-right">
                        <p><strong>CDMX:</strong> ${fecha}</p>
                        <p><strong>NOMBRE:</strong> ${nombre} </p>
                        <p><strong>Teléfono:</strong> ${telefono}</p>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-6 text-left">
                        <p>Por medio de la presente hago constar que el Sr.(a) de nombre:</p>
                        <p><strong>${nombre} ${segundo} ${apellido}</strong></p>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12">
                        <p>Solicitó los servicios de: <strong>Banda Sinaloense</strong></p>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-12">
                        <!-- Utiliza las variables nombre, segundo, apellido, etc., en lugar de valores estáticos -->
                        <p>El evento será con 12 elementos uniformados con audio para el cantante. El servicio musical se prestará durante dos turnos de una hora completa, <strong>llegaríamos al evento 10 o 15 minutos antes</strong> del evento <strong>cualquier percance el representante de la banda le hablaría por teléfono al cliente al número que proporcionó</strong>, en caso de llegar tarde se le repondrá el tiempo perdido al cliente.</p>
                        <br>
                        <br>
                        <p>Una vez firmado el contrato se contemplará, pero se apartará hasta que este junto con el anticipo y <strong>no se podrá faltar a su evento</strong>, En caso de no asistir se le compensará al cliente con: una hora gratis en caso requerir el evento todavía o con la devolución de su dinero y un descuento para un futuro evento, En el caso de que el cliente requiera algún cambio estará sujeto a disponibilidad.</p>
                        <p>El evento será:</p>
                        <br>
                        <p>Para <strong>el día ${fechaFormateada}</strong> iniciando el evento a las <strong>${horaInicio}</strong> y terminando a las <strong>${horaFin}</strong></p>
                        <p>El lugar de la presentación del servicio será en:</p>
                        <p><strong>${calle} ${colonia}  ${numExterno}, ${municipio}, ${estado} </strong></p>
                        <p>El solicitante se compromete a pagar la cantidad de <strong>$${precioFinal} pesos mexicanos</strong>.  Cantidad con letra: <strong>${precioLetra} pesos mexicanos</strong>.</p>
                        <p></p>
                        <br>
                        <p>Dicha cantidad será pagada de la siguiente manera: <strong>${porcentaje1}%</strong> de anticipo y <strong>${porcentaje2}%</strong> al llegar al evento antes de comenzar.</p>
                        <p>A) <strong>$${precioPorcentaje1}</strong> pesos a la firma del representante</p>
                        <p>B) <strong>$${precioPorcentaje2}</strong> pesos el día del evento al llegar antes de comenzar</p>
                        
                    </div>
                    </div>
                        <div class="row">
                        <div class="col-md-6">
                            <!-- Firma del Cliente -->
                            <img src="firma.jpg" alt="Firma del Prestador" style="width: 60%;">
                            <p>________________________________________________________</p>
                            <p>Prestador del servicio: <strong>${prestatario}</strong></p>
                        </div>
                        <div class="col-md-6">
                            <img src="firma2.jpg" alt="Firma del Prestatario" style="width: 60%;">
                            <p>________________________________________________________</p>
                            <p>Prestatario del servicio: <strong>${nombre} ${segundo} ${apellido}</strong></p>
                        </div>
                    </div>
            </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
             <script>
                // Agregar la función de impresión al evento onload
                window.onload = function() {
                    window.print();
                };
            </script>
        </body>
        </html>
    `;

    // Escribir el contenido HTML en la ventana emergente
    ventanaEmergente.document.open();
    ventanaEmergente.document.write(contenidoHTML);
    ventanaEmergente.document.print();
}
