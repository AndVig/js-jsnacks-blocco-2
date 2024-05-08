function inserisciInTesta(arrayOld, element){
    new arrayNew((arrayOld.length)+1);
    arrayNew[0]=element;
    for(let i=0;i<arrayOld.length;i++){
        arrayNew[i+1]=arrayOld[i];
    }
    return arrayNew
}