//random
let rand=Math.floor(Math.random()*10)+1;
//arrays
let a=new Array(rand);
let b=new Array();

while (b.length<a.length){
    i=Math.floor(Math.random()*10)+1;
    b.push(i);
}
console.log(a, a.length);
console.log(b, b.length);
