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
(function(a)
{
    for(i=2;i<a;i++)
{
    if(a%i==0)
    {
        console.log("NOT PRIME");
        return a;
    }
    else
    {
        console.log("PRIME");
        return a;
    }

}
})(8)

});
