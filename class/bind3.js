function total()
{
    var result=0
    for (var i=0;i<arguments.length;i++)
    {
        result+=arguments[i];
    }
    return result;
}
var x=total.call(null,1,2,3,4,5,6,7,8,9,10);
console.log(x)
