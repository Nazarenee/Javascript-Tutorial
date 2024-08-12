class Address {
    constructor(street, city, country){
    this.street= street;
    this.city = city;
    this.country = country;
    }


}



class Person {
    constructor(name,age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
    }
}


const person1 = new Person("Spongebob",30,"124 Conch st.","bikini bottom", "int waters");

console.log(person1.address.city);