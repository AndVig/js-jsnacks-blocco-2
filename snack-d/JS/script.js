function rimuoviDallaCoda (array){
    let remove=array.pop();
    return array;
}
function rimuoviDallaCodaDue(array){
    delete array[array.length-1];
    return array;
}