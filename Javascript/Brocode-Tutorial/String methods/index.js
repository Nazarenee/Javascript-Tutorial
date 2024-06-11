let userName = "Nazarene";


console.log(userName.charAt(0));

console.log(userName.indexOf("e")); // første occurrence af e

console.log(userName.lastIndexOf("e"));  // sidste occurrence af e

userName.length;


userName = userName.trim; //trimer white space

userName.toUpperCase 

userName.toLowerCase 

userName = userName.repeat(4); //repeater den 4 gange

let result = userName.startsWith(" "); //true eller false 

userName.endsWith(" ");

userName.includes();

if(result){
    console.log("Ur username cant begin with an empty space");
}
else{
    console.log(userName);
}

let phonenumber = "123-123-421-432";

phonenumber= phonenumber.replace("-"," ");

console.log(phonenumber);

phonenumber = phonenumber.padStart(20,"0"); // padder phonenumber med 0 indtil phonenumber består af 20 tegn