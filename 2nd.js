/*
Expression funnction:--
It is also called anonymous function. we can run this function without using its name. 
*/

var chandigarh=function()   //default expression function
{
    var a=12, b=3,c 
    c=a+b 
    console.log("Sum is: ",c)
}

 var ctest=function pawa()  //default expression with name function
 {
    var a=12, b=2,c 
    c=a*b
    console.log("Mul is: ",c)
 }


var chd=function(a,b) //parameter expression function
{
    c=a/b
    console.log("Div is: ",c)
}


var mh=function(a,b) //parameter retun function
{
    c=a-b
    return c 
}
chandigarh()   //default expression function
ctest()  //default expression function with name
chd(12,2)  //parameter  function
var mohali=mh(12,2) //parameter retun function
console.log("Substraction is: ",mohali)