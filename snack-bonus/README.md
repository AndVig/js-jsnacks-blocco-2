snack-bonus
scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A

soluzione:
- la funzione riceve l'array (arrayOld), un elemento (element) e crea un altro (arrayNew) di lunghezza array arrayOld+1
- il primo elemento di arrayNew è uguale ad element
- ciclo per i da 0 ad arrayOld.length per cui ogni elemento arrayNew[i+1]=arrayOld[i]
- return arrayNew