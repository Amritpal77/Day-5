function hello(a,b,c,d,e,f)
{
    var sum=0
    for(var i=0; i<arguments.length; i++)
    {
        sum+=arguments[i]
    }
    console.log("Total sum  is: ",sum)
}
hello(12,13,14,15,16,17)