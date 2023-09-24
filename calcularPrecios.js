document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('miSelect');
    var turnos2Select = document.getElementById('turnos2');
    var precioFinalInput = document.getElementById('precioFinal');
    var precioPorcentaje1Input = document.getElementById('precioPorcentaje1');
    var precioPorcentaje2Input = document.getElementById('precioPorcentaje2');
    var porcentaje1Input = document.getElementById('porcentaje1');
    var porcentaje2Input = document.getElementById('porcentaje2');
    var precioLetraInput = document.getElementById('precioLetra');

    // Función para calcular precios
    function calcularPrecios(turnos) {
        var precioFinal = 0;
        var precioPorcentaje1 = 0;
        var precioPorcentaje2 = 0;
        var porcentaje1 = "40";
        var porcentaje2 = "60";
        var precioLetra = "Cero";
        switch (turnos) {
            case "1":
                precioFinal = "3,000";
                precioPorcentaje1 = "1,200";
                precioPorcentaje2 = "1,800";
                precioLetra = "Tres mil";
                break;
            case "2":
                precioFinal = "5,500";
                precioPorcentaje1 = "2,200";
                precioPorcentaje2 = "3,300";
                precioLetra = "Cinco mil quinientos";
                break;
            case "3":
                precioFinal = "7,000";
                precioPorcentaje1 = "2,800";
                precioPorcentaje2 = "4,200";
                precioLetra = "Siete mil";
                break;
            case "4":
                precioFinal = "8,500";
                precioPorcentaje1 = "3,400";
                precioPorcentaje2 = "5,400";
                precioLetra = "Ocho mil quinientos";
                break;
            case "5":
                precioFinal = "9,000";
                precioPorcentaje1 = "3,600";
                precioPorcentaje2 = "5,400";
                precioLetra = "Nueve mil";
                break;
            default:
                precioFinal = 0;
                precioPorcentaje1 = 0;
                precioPorcentaje2 = 0;
                precioLetra = "Cero";
        }

        precioFinalInput.value = precioFinal;
        precioPorcentaje1Input.value = precioPorcentaje1;
        precioPorcentaje2Input.value = precioPorcentaje2;
        porcentaje1Input.value = porcentaje1;
        porcentaje2Input.value = porcentaje2;
        precioLetraInput.value = precioLetra;
    }

    // Escuchar el evento "change" en el campo "turnos2"
    turnos2Select.addEventListener('change', function () {
        var selectedValue = this.value;
        calcularPrecios(selectedValue);
    });

    // Llamar a la función de cálculo inicialmente con el valor predeterminado del campo "turnos2"
    calcularPrecios(turnos2Select.value);
});
