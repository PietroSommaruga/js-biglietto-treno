// Chiedo i chilometri che si vogliono percorrere
let km = prompt('Inserisci i chilometri da percorrere');
km = parseInt(km);


// Chiedo l'età 
let age = prompt('Inserisci la tua età')
age = parseInt(age);

// Imposto il prezzo in base ai chilometri
let price = (0.21 * km);


// Prezzo per i minorenni
let underAgedPrice = (0.21 * km) - (km * 0.21 * 0.2);
let finalUnderAgedPrice = underAgedPrice.toFixed(2);

// Prezzo per gli anziani
let overAgedPrice = (0.21 * km) - (km * 0.21 * 0.4);
let finalOverAgedPrice = overAgedPrice.toFixed(2);

let outputHTML = document.getElementById("price");
let discountHTML = document.getElementById('discount')

// calcolo del prezzo
if (age < 18){
    outputHTML.innerHTML = `Desidera percorrere ${km} Km <br> Il prezzo del biglietto è di: <b>${finalUnderAgedPrice}</b> € <br> Hai diritto al 20% di sconto per minorenni`;
} else if (age > 65){
    outputHTML.innerHTML = `Desidera percorrere ${km} Km <br> Il prezzo del biglietto è di: <b>${finalOverAgedPrice}</b> € <br> Hai diritto al 40% di sconto per gli over 65`;
} else{
    outputHTML.innerHTML = `Desidera percorrere ${km} Km <br> Il prezzo del biglietto è di: <b>${price}</b> €`;
}
