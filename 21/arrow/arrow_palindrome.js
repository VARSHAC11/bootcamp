
var palindrome=(a)=>{
    var s=a.split("");
    var t=s.reverse();
    var r=t.join("");
    
    if (r==a)
    {
        console.log("palindrome",a);


    }
    else
    {
        console.log("not palindrome",a)
    }
}


var arr=["dad","varsha"];
for(j=0;j<arr.length;j++)
{
    palindrome(arr[j])
}
