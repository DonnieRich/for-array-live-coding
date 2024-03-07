
// uso il querySelector per recuperare un singolo elemento del DOM tramite selettore
// in questo caso una classe
const searchButtonDOMElement = document.querySelector('.search');

// uso getElementById per recuperare un singolo elemento del DOM tramite ID
const inputUserNumberDOMElement = document.getElementById('user-number');

// preparo un array vuoto che andrò a popolare successivamente
// e che conterrà una serie di numeri interi
const numbers = [];

// creo un ciclo che eseguirà 7 iterazioni
for (let iterations = 1; iterations <= 7; iterations++) {

    // ad ogni iterazione genero un numero casuale compreso fra 1 e 150
    // https://www.w3schools.com/js/js_random.asp
    const randomNumber = Math.floor(Math.random() * 150) + 1;

    // inserisco il numero generato alla fine dell'array numbers
    numbers.push(randomNumber);
}

// stampo in console tutto l'array
console.log(numbers);

// resto in ascolto per l'evento click sul mio button
searchButtonDOMElement.addEventListener('click', function () {

    // recupero il valore inserito dall'utente nell'input
    const userNumber = parseInt(inputUserNumberDOMElement.value);

    // creo variabile di controllo per verificare la presenza del numero scelto dall'utente
    let isUserNumberInArray = false;

    // creo un ciclo for per scorrere ogni elemento dell'array numbers
    for (let i = 0; i < numbers.length; i++) {

        // salvo l'elemento attuale dell'array in una variabile 
        const number = numbers[i];
        // console.log(number)

        // controllo se l'elemento attuale dell'array corrisponde a quanto inserito dall'utente
        if (userNumber === number) {

            // se corrisponde modifico il valore della variabile di controllo
            isUserNumberInArray = true;
        }

    }

    //se l'utente ha inserito un numero presente nell'array
    if (isUserNumberInArray === true) {
        //stampo messaggio 'presente'
        console.log('numero utente presente')

    }
    //altrimenti
    else {
        //stampo messaggio 'assente'
        console.log('numero utente non presente')
    }

});