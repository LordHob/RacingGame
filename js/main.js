// ------ FUNCION PARA CAMBIAR DE PANTALLA ------ //

const cambiarPantalla = (pantallaDestino) => {

    let arrayDeFases = ["1", "2", "3", "4", "5"];

    arrayDeFases = arrayDeFases.filter(iterador => !pantallaDestino.includes(iterador));

    document.getElementById(pantallaDestino).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {
        document.getElementById(cadaPosicion).style.display = "none";

    }
}


// Crear array donde vas metiendo los coches que vas seleccionando hasta que se llena la array //

let arrayDeCoches = ["", ""];
var indice = 0;

// ---- Función para la selección de coches ---- //

function seleccionarCoche (coche) {
    arrayDeCoches[indice] = coche;
    document.getElementById("coche" +indice).src="img/"+coche+".jpg";
    indice++;
    checkIndice();
}

// ----- Declaramos la distancia a recorrer por ambos vehículos ----- //

var MetrosRecorridosCoche0 = 0;
var MetrosRecorridosCoche1 = 0;
var MetrosARecorrer = 500;

// ----- Función de carrera ----- //
// ----- Comprueba que los dos coches están seleccionados y gana el primero que supera la distancia establecida ----- //

function checkIndice() {
    if (indice == 2) {  
        cambiarPantalla("4");
        var IntervaloDistancia = window.setInterval(function () {
            MetrosRecorridosCoche0 += Math.random() * (100 - 50) + 50;
            MetrosRecorridosCoche1 += Math.random() * (100 - 50) + 50;
            if (MetrosRecorridosCoche0 >= MetrosARecorrer || MetrosRecorridosCoche1 >= MetrosARecorrer) {
                document.getElementById("botonResultado").style.display = "block";
                clearInterval(IntervaloDistancia);
                if (MetrosRecorridosCoche0 < MetrosRecorridosCoche1) {
                    document.getElementById("CocheGanador").src = "img/" + arrayDeCoches[1] + ".jpg";
                }
                else {
                    document.getElementById("CocheGanador").src = "img/" + arrayDeCoches[0] + ".jpg";
                }
            }   
            document.getElementById("contadorCoche0").innerHTML = "Metros Coche 1: " + MetrosRecorridosCoche0.toFixed(2);
            document.getElementById("contadorCoche1").innerHTML = "Metros Coche 2: " + MetrosRecorridosCoche1.toFixed(2);
        }, 1000);
    }
}

// ----- Función de reseto del juego ----- //

function ResetearJuego() {
    indice = 0;
    MetrosRecorridosCoche0 = 0;
    MetrosRecorridosCoche1 = 0;
    cambiarPantalla("1");
    document.getElementById("botonResultado").style.display = "none";
}
