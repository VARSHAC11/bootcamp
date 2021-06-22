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
var t= (str)=>
{
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) 
  {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log( str.join(' '));
  //end-here
}
t("varsha");
});
