var getCodeCountry=function(zipCode,country)
{
    console.log(country + '-->' + zipCode);

};
var obj={
    zip:123456
};
getCodeCountry.call(obj,789,'MH')

Output:
MH-->789
