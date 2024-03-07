
// creo un array di numeri interi
const numbers = [3, 7, 2, 23, 67, 44, 89];

// creare variabile di controllo per verificare la prensenza di numeri pari
let areEvenNumbersInArray = false;

// creo un ciclo for per scorrere tutto l'array
for (let i = 0; i < numbers.length; i++) {

    // salvo l'elemento attuale dell'array in una variabile
    const number = numbers[i];

    // controllo se il valore dell'elemento dell'array è pari
    if (number % 2 === 0) {
        // se è pari modifico il valore della variabile di controllo
        areEvenNumbersInArray = true;
    }

}

//se sono presenti numeri pari
if (areEvenNumbersInArray === true) {
    //stampo messaggio 'presenti'
    console.log('Numeri pari presenti');
}
//altrimenti
else {
    //stampo messaggio 'assenti'
    console.log('Numeri pari assenti');
}
