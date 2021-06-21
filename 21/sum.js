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
var a=[1,2,3,4,5,6];

var sum=0;
(function(ar){
for(i=0;i<a.length;i++)
{
    sum=sum+a[i];
   
}
console.log(sum);
})(a);

});
