//Transformador de Grados Celcius a Fahrenheit y Kelvin - Camilo González Jara
// Se genera Prompt Sync, para ingreso de información a traves de consola-
var prompt = require("prompt-sync")();

// Funcion para convertir grados Celsius a Fahrenheit.

function convertirGradosFahrenheit(c) {
    return ((c * (9/5)) + 32);
}

// Función para convertir grados Celsius a Kelvin.

function convertirGradosKelvin(c) {
    return (c + 273.15);
}

// Función para ingreso de información de parte del usuario, con condicion de ingreso de numeros
function convertirTemperatura() {
    let celsius = prompt("Ingresar a continuación grados Celsius, para transformarlos a grados Fahrenheit y Kelvin : ");

    // Se condiciona el input, para que pueda revisarse la información ingresada, si esta no corresponde a un numero, se devuelve un mensaje de error y se repite el proceso.

    // Verificar si el valor ingresado es un número y el input ingresado no se encuentra vacio.
    if (isNaN(celsius) || celsius === "") {
        console.log("Favor ingrese un dato valido (Numeros), el valor ingresado no es correcto, intentelo nuevamente.");
        return convertirTemperatura(); // Volver a solicitar la temperatura si el valor no es válido
    } else {
        // Convertir el valor ingresado a número decimal, para poder obtener resultados exactos.
        celsius = parseFloat(celsius);
    }
    // Se realizan las conversiones de temperatura //
    let fahrenheit = convertirGradosFahrenheit(celsius);
    let kelvin = convertirGradosKelvin(celsius);

    // Se imprimen los rersultados en la consola
    console.log("Los grados Celsius ingresados, corresponden a : " + fahrenheit + " Grados Fahrenheit. ");
    console.log("Los grados Celsius ingresados, corresponden a : " + kelvin + " Grados Kelvin. ");
}
// Se llama a la función para iniciar el proceso de conversión.
convertirTemperatura();
