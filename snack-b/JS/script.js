function trovaIndice(array, element){
    for(i=0;i<array.length;i++){
        if(array[i]==element){
            return i;
        }
    }
    return -1;
}