// Class Defination

class Person {
  constructor(name, age, firstName, lastName) {
    this.name = name;
    this.age = age;
    // Getters and Setters
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstname.toUpperCase();
  }

  set firstName(value) {
    this._firstname = value;
  }

  sayGreeting() {
    console.log("Hello how are you? ");
  }

  updateAge(age) {
    this.age = age;
    console.log("Age Updated");
  }

  static genericGreeting() {
    console.log("Hey there :) ");
  }
}

class Student extends Person {
  static noStudents = 0;
  constructor(studentId) {
    super();
    this.studentId = studentId;
    Student.noStudents++;
  }

  sayGreeting() {
    return `Hello I am ${this.name}. And my student Id is ${this.studentId}`;
  }

  printId() {
    console.log("Your student Id is: " + this.studentId);
  }
}

Person.genericGreeting();

//Getter Setters

const person = new Person("Ayush", 19, "ayush", "singh");
console.log(person.firstName);

/*

const student1 = new Student(1324);

student1.printId();
console.log(student1.sayGreeting());

*/

/*
const person1 = new Person();
person1.sayGreeting();

person1.name = "Ayush";
person1.age = 20;

person1.updateAge(20);
*/

// Activity Four (Getters and Setters)
