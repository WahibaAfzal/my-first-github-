// lower case
let personName1 = "Wahiba";
console.log("lowercase:", personName1.toLowerCase());

//uppar case
console.log("upparcase:", personName1.toLocaleUpperCase());

//Tittle case
console.log("Tittlecase:", personName1.replace(/\bw/g,c => c.toUpperCase()));

// Question : 6 /stripping Names;
var personName2 = "\n\t WAHIBA AFZAL";
console.log(personName2);
var stripped = personName2.trim() ;
console.log(stripped);


//question 11: Names
var members = ['Wahiba' ,'Sawera', 'Nimra ','Ebaad'];
for (var i = 0; i < members.length; i++ ) {
     console.log(members [i]);
}


//question 12:
var members = ['Wahiba','Sawera', 'Nimra ','Ebaad'];
var message = "kal class ma kia phraya tha  ";
for (var i = 0; i < members.length; i++ ) {
    console.log(message + members [i]);
}


