
// dichiaro un array vuoto
const array = [];

// creo un ciclo che scorrerà i numeri da 8 a 25
for (let number = 8; number <= 25; number++) {

    // ad ogni iterazione andrò ad inserire il numero nell'array
    array.push(number)
}

// stampo l'array in console
console.log(array);

// creo un ciclo che scorre l'array appena popolato
for (let i = 0; i < array.length; i++) {

    // ad ogni iterazione stampo in console l'elemento corrente
    console.log(array[i]);
}

// creo un ciclo che scorre l'array appena popolato, partendo dalla fine
for (let i = array.length - 1; i >= 0; i--) {

    // ad ogni iterazione stampo in console l'elemento corrente
    console.log(array[i]);
}

// dichiaro un array con già dei valori al suo interno
const listaNomi = ["Marco", "Salvo", "Biagio"];

// creo un ciclo che scorre l'array appena popolato
for (let i = 0; i < listaNomi.length; i++) {

    // ad ogni iterazione stampo in console l'elemento corrente
    console.log(listaNomi[i]);
}

// creo un ciclo che scorre l'array appena popolato, partendo dalla fine
for (let i = listaNomi.length - 1; i >= 0; i--) {

    // ad ogni iterazione stampo in console l'elemento corrente
    console.log(listaNomi[i]);
}