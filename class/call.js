var person1 = {
  name: "John Doe",
  mobileCharge: 60,
  chargeMobile: function (x,y) {
    console.log(this.name);
 
     //this.mobileCharge=y;
     console.log(x);
     console.log(y);
  
   
  }
};

var person2 = {
  name: "Ajeeth",
  mobileCharge: 50,
};


person1.chargeMobile.apply(person2,[7,9]);

//person1.chargeMobile.apply(person2,[1,2,3]);



output
Ajeeth
7
9
