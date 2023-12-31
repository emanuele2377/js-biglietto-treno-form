let eta =("Inserire l'età del viaggiatore");
let distanza =("Inserire la distanza del viaggio in km");
const element = document.getElementById("message");
const costoPerKm = 0.21;
let message = "";
const btn = document.getElementById("myBtn");
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
  // Se età e distanza sono numerici
if( Number.isFinite(eta) && Number.isFinite(distanza) ) {
    
    // Calcola costo iniziale
    let costo = distanza * costoPerKm;
    console.log("Costo iniziale: ", costo);

    // Sconto under 18
    if(eta < 18) {
        costo = costo * 0.8;
        message = `Hai diritto allo sconto junior. `;

    // Sconto over 65
    } else if(eta >= 65) {
        costo = costo * 0.6;      
        message = `Hai diritto allo sconto senior. `;
    }

    //Dopo if/else dell'età
    message += `Costo biglietto: ${costo.toFixed(2)} €`;

// In caso di errori relativi ai dati inseriti
} else {
    message = "Errore: i dati inseriti non sono corretti";
}

element.innerHTML = message;


});



