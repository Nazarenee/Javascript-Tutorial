class User{
  static userCount = 0;

  constructor(username){
  this.username=username;
  User.userCount++;  
}

sayHello(){
  console.log(`Hello my username is ${this.username}`);
}

static getUserCount(){
  console.log(`There are ${User.userCount} users online`);
}

}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");


user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(User.userCount);

User.getUserCount();