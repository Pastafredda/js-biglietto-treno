// Dichiarazione di variabili
let numeroKm , eta , prezzoBiglietto, sconto, prezzoFinale, messaggio;

// Chiediamo quanti chilometri deve percorrere 
numeroKm = prompt ("Inserisci il numero di chilometri da percorrere");
console.log(numeroKm);

// Chiediamo l'età
eta = prompt ("Inserisci la tua età") ;
console.log(eta);

if (eta <= 18) {
    // Sconto per minorenni
    sconto = 20;
    
} else if (eta >= 65) {
    // Sconto per over 65
    sconto = 40;
    
} else{
   sconto=0
}

console.log(sconto);

// Prezzo del biglietto 
prezzoBiglietto = numeroKm * 0.21 ;
console.log(prezzoBiglietto);

// Sconto
bigliettoSconto = prezzoBiglietto * sconto / 100 ;
prezzoFinale = prezzoBiglietto - bigliettoSconto ;
console.log(bigliettoSconto);
console.log(prezzoFinale);

document.getElementById("ticket").innerHTML= messaggio

