
alert('BIENVENIDO A FLASHENVIOS a continuacion se le solicitará que ingrese hacia donde quiere enviar su paquete, actualmente solo contamos con tres rutas, favor ingrese solo la letra *R* seguido del número de la ruta');

const comprarProductos = () => {
    let ruta = '';
    let peso = 0;
    let precio = 0;
    let totalEnvio = 0;
    let seguirComprando = false;

    do {
        ruta = prompt('Favor ingrese la ruta R1 a Cartagena, R2 a Santa Marta o R3 a Bogotá').toUpperCase();
        peso = parseInt(prompt ('¿Cuanto pesa tu paquete?'));

        let validarpeso = validarCantidad(peso);

    switch (ruta) {
        case "R1":
            precio = 15;
            
            break;
        case "R2":
            precio = 20;
            break;
        case "R3":
            precio = 30;
            break;
        default:
            alert("Ingrese la ruta correcta");
            precio= 0;
            peso= 0;
    }

    totalEnvio += precio + ( (69/100) * validarpeso);
    seguirComprando = confirm("¿Deseas agregar otro paquete?");

    } while (seguirComprando)

    const totalConDescuento = aplicarDescuento(totalEnvio);
    return totalConDescuento;
}

//Valido que el peso sea un numero
const validarCantidad = (peso) => {
    while (Number.isNaN(peso) || peso === 0) {
        if (peso !== 0) {
            alert('Deber agregar un número.')
        } else {
            alert('Debe agregar un número distinto de cero.')
        }
        peso = parseInt(prompt ("¿Cuanto pesa tu paquete?"));
    }

    return peso;
};

//Descuento si hace envio de varios paquetes
const aplicarDescuento = (totalEnvio) => {
    let totalConDescuento = 0;
    if (totalEnvio >= 5000) {
        totalConDescuento = totalEnvio * 0.90;
        return totalConDescuento;
    } else {
        return totalEnvio;
    }
}

//Sorteo
//Obtiene un numero entre 0 y 1 si se coloca 2.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const descuentoSorteo = (totalSorteo) => {
    let descuentoSorteo = 0;
    let nogana = 0
    if (getRandomInt(2) == 0) {
        descuentoSorteo = totalSorteo * (10/100);
        console.log(descuentoSorteo);
        alert('Ganaste un descuento de 10% - FELICIDADES!');
        return descuentoSorteo;
    } else {
        alert('No ganaste descuento en sorteo :(');
        return nogana;
    }
}

function anunciartotal (totalEnvio, totalSorteo) {
    totalEnvio = totalEnvio - totalSorteo;
    alert ("El total a pagar es US$"+totalEnvio);
}


const totalEnvio = comprarProductos();
const descSorteo = descuentoSorteo(1);
anunciartotal(totalEnvio, descSorteo);