/*
Rest Parameters: ---
The rest parameters allows to represent an idefinite number of arguments as an array
(...) means many arguments
*/
/*
function hello(...chd)
{
    console.log("Length is ",chd.length)
    console.log(chd)
    console.log(chd[0])
}
hello(122,223,432,23,234)
*/

var s=(a,b,...chd)=>
{    
    console.log("your value is",chd)
    console.log("your A value is",a)
    console.log("your B value is",b)
    console.log(chd[0])
    console.log(a+chd[1])
}
s(122,223,1,23,234)