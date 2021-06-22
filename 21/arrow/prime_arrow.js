
var prime=(a)=>
{
    for(i=2;i<a;i++)
    {
        if(a%i==0)
        {
            console.log("Not prime",a);
            return;
        }
        
    

        
        
    }
    console.log("Prime",a)
    

}


var arr=[2,3,4,5,6,7,8];
for(j=0;j<arr.length;j++)
{
    prime(arr[j])
}
