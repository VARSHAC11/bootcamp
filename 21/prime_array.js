
var prime=function(a){
    for(i=2;i<a;i++)
    {
        if(a%i==0)
        {   
            console.log("Not Prime",a);
            return;
        }
        
        
    }   
    console.log(" Prime",a);
}


arr=[2,3,4,5];
for(j=0;j<arr.length;j++)
{
    prime(arr[j]);
}
