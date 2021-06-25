
'use strict'
var person={
    name:"John Doe",
    data:
    {
        name:"Mike",
        getName:function(){
            return this.name;
        }
    }
}
var x=person.data.getName.bind(person);
console.log(x());



/*output:
John Doe
As mike is local Scope*/
