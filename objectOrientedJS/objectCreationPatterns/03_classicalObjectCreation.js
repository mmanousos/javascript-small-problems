// Classical Object Creation
// Implement the following diagram using the pseudo-classical approach. 
// Subclasses should inherit everything from the superclass and not just the 
// methods. Reuse the constructors of the superclass when implementing a 
// subclass.

// For the methods, you can have it log out anything you want.

function Person(first, last, age, gender) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.first} ${this.last}`;
};

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

function Doctor(first, last, age, gender, specialization) {
  Person.call(this, first, last, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
};

function Professor(first, last, age, gender, subject) {
  Person.call(first, last, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.creator = Professor;

Professor.prototype.teach = function() {
  console.log('Teaching');
};

function Student(first, last, age, gender, degree) {
  Person.call(this, first, last, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.creator = Student;

Student.prototype.study = function() {
  console.log('Studying');
};

function GraduateStudent(first, last, age, gender, degree, graduateDegree) {
  Student.call(this, first, last, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.creator = GraduateStudent;

GraduateStudent.prototype.research = function() {
  console.log('Researching');
}

// ** tests ** 
// Here's a sample run you can use as a reference:

var person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

var doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'
console.log(doctor.specialization);        // logs 'Pediatrics'
console.log(doctor.first);                 // logs 'foo'
console.log(doctor.age);                   // logs 21

var graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student); 
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
console.log(graduateStudent.degree);     // logs 'BS Industrial Engineering'