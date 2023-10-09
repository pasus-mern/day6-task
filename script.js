//3.Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Mani", "Raj",24, "Civil", "xyz@gmail.com", 123456789, "chennai");
let person2 = new Person("Vijay","Sundar", 27, "MBA", "abcd@gmail.com", 987654321, "chennai");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());


//--------------------------------------------------------------------------------------------

//4.write a class to calculate the uber price

class UberPrice {
constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
  this.distance = distance;
  this.duration = duration;
  this.baseFare = baseFare;
  this.costPerMile = costPerMile;
  this.costPerMinute = costPerMinute;
}

totalPrice() {
  return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
}
}

const myUber = new UberPrice(5, 10, 60, 14, 2);
console.log(myUber.totalPrice());

