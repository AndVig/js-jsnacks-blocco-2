
function contaElementi(array){
    let count=array.length;
    if(array=''){
        return console.log('array vuoto');
    }else{
        for(let i=0;i<array.length;i++){
            if (array[i]=''){
                count--
                console.log(count);
            }
        }
        return count;
    }
}