
var rand=Math.floor(Math.random()*10)+1;
var a=new Array(rand);
var b=new Array();
let i=0;
while (b.length<a.length){
    i=Math.floor(Math.random()*10)+1;
    b.push(i);
}
console.log(a, a.length);
console.log(b, b.length);
