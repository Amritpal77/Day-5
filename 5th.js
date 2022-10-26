/*
Many function argumenst:--
If a function is called with too many arguments, these arguments can be reached using the arguments
object which is built in.
*/
function hello()
{
    console.log("How are you!!")
    console.log("Value is: ",arguments[0])
    
}
hello(12,123,1234)

function he(a,b)
{
    console.log("How are you!!")
    console.log("Value is: ",arguments[0])
    console.log("Your A value is: ",a)
    console.log(a+arguments[0])
}
he(12,123,1234)
