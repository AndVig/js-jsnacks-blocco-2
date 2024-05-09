
function contaElementi(array){
    let count=array.length;
    if(array=''){
        return console.log('array vuoto');
    }else{
        for(let i=0;i<array.length;i++){
            if (array[i]=undefined){
                count--
                console.log(count);
            }
        }
        return count;
    }
}