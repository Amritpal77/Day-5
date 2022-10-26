/*
Arrow Function:--
We donot give name to arrow function. We donot use funnctoin keyword to declare function
()=> it is arrow function
There are twoo ways to call this function
*/

var hello=()=>  // Arrow default function
{
    var a=12,b=2,c 
    c=a+b
    console.log("Sum is",c)
}
var hi=(a,b)=>  // Arrow parameter function
{
    c=a-b
    console.log("Sub is",c)
}
var ans=(a,b)=>   // Arrow return function
{
    c=a*b
    return c
}
hello()
hi(12,2)
var chd=ans(12,2)
console.log("Multiplication is: " +chd)