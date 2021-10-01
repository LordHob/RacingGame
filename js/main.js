const cambiarPantalla = (pantallaDestino) => {

    // Primer paso generamos array con todas la fases

    let arrayDeFases = ["1", "2", "3", "4"];

    arrayDeFases = arrayDeFases.filter(iterador => !pantallaDestino.includes(iterador));

    document.getElementById(pantallaDestino).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {
        document.getElementById(cadaPosicion).style.display = "none";

    }
}




// Selectcar(ferrari) => {

//     let fasewant = "fase" + arg_O;
//     let arrFases = ["fase1", "fase2", "fase3", "fase4"]; 
//     arrFases = arrFases.filter(val => !ferrari.includes(val));
//     document.getElementById(ferrari).style.display = "block";
//     for (let _f of arrFases) {
//         document.getElementById(_f).style.display = "none";
//     }
// }

// Crear array donde vas metiendo los coches que vas seleccionando hasta que se llena la array

