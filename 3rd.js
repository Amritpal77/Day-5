/*
Anonymous function:--
iife-- it is javascript function which runs as soon as it is defined
*/

/*
(function()
{
    var a=12,b=12,c 
    c=a+b 
    console.log("Sum is: ",c)
})
()

(()=>
{
    var a=12,b=12,c 
    c=a-b 
    console.log("Sum is: ",c)
})
//()
*/
( (a,b)=>
{
     
    c=a-b 
    console.log("Sub is: ",c)
})(12,4)