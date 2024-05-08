snack-a
scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array

soluzione:
- la funzione riceve un array
- inizializza una variabile "count"= array.length
- primo controllo array vuoto
- ciclo for da i=0, i< array.length con controllo che nella casella ci sia effettivamente un elemento: se trova una casella vuota sottrae 1 a count
- alla fine del ciclo la funzione restituisce  la variabile count