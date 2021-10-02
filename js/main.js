// FUNCION PARA CAMBIAR PANTALLA

const cambiarPantalla = (pantallaDestino) => {

    // Primer paso generamos array con todas la fases

    let arrayDeFases = ["1", "2", "3", "4"];

    arrayDeFases = arrayDeFases.filter(iterador => !pantallaDestino.includes(iterador));

    document.getElementById(pantallaDestino).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {
        document.getElementById(cadaPosicion).style.display = "none";

    }
}


// Crear array donde vas metiendo los coches que vas seleccionando hasta que se llena la array

let arrayDeCoches = ["", ""];
var indice = 0;

seleccionarCoche = (coche) => {
    arrayDeCoches[indice] = coche;
    document.getElementById("coche" +indice).src="img/"+coche+".jpg";
    indice++;
    checkIndice();
}

var MetrosRecorridosCoche0 = 0;
var MetrosRecorridosCoche1 = 0;

function checkIndice() {
    if (indice == 2) {  
        cambiarPantalla("4");
        var IntervaloDistancia = window.setInterval(function () {
            MetrosRecorridosCoche0 += Math.random() * (100 - 50) + 50;
            MetrosRecorridosCoche1 += Math.random() * (100 - 50) + 50;
            if (MetrosRecorridosCoche0 >= 3000 || MetrosRecorridosCoche1 >= 3000)
                clearInterval(IntervaloDistancia)
            document.getElementById("contadorCoche0").innerHTML = "Metros Coche 0: " + MetrosRecorridosCoche0.toFixed(2);
            document.getElementById("contadorCoche1").innerHTML = "Metros Coche 1: " + MetrosRecorridosCoche1.toFixed(2);
        }, 1000);
    }
}
