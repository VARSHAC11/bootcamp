// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
b=[]
c=[]
var t=function (...input)
{
    for(i=0;i<input.length;i++)
    {
        if(input[i]%2==0)
        {
            b.push(input[i]);
        }
        else
        {
            c.push(input[i]);
        }
    }
    console.log(c);
}
 
t(1,2,3,4,5)

  //end-here
});
