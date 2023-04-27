// Dichiarazione di variabili
let numeroKm , eta , prezzoBiglietto, sconto, prezzoFinale, messaggio, fixed;
const cifra= "€";

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
bigliettoSconto = Math.round(prezzoBiglietto * sconto / 100)  ;
prezzoFinale = prezzoBiglietto - bigliettoSconto ;
fixed=prezzoFinale.toFixed(2);
console.log(bigliettoSconto);
console.log(prezzoFinale);
console.log(fixed);

messaggio= `Il tuo biglietto costa ${fixed+cifra}`;

document.getElementById("ticket").innerHTML= messaggio

