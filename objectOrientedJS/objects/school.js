// School
// Create a school object. The school object uses the student object from the 
// previous exercise. It has methods that use and update information about the 
// student. Be sure to check out the previous exercise for the other arguments 
// that might be needed by the school object. 

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    notes: {},
    info: function () {
      console.log(`${this.name} is a ${this.year} year student`)
    },
    addCourse: function (course) {
      this.courses.push(course);
    },
    listCourses: function () {
      console.log(this.courses);
    },
    addNote: function (code, note) {
      if (this.notes[code]) {
        this.notes[code] += `; ${note}`;
      } else {
        this.notes[code] = note;
      }
    },
    updateNote: function (code, note) {
      this.notes[code] = note;
    },
    viewNotes: function () {
      let notes = this.courses.map((course) => {
        if (this.notes[course.code]) {
          return `${course.name}: ${this.notes[course.code]}`
        } else {
          return '';
        }
      });

      notes = notes.filter((note) => note !== '');
      notes.forEach((note) => console.log(note));
    },
  };
}

// Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the student 
  // to a collection of students. The method adds a constraint that the year can
  //  only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'.
  //  Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course 
  // has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only 
  // student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the 
  // three student objects, produces the following values from the getReportCard
  //  and courseReport methods respectively.

// school has collection of students (array)
//   years of students can only be ['1st', '2nd', '3rd', '4th', '5th']
//   otherwise logs 'Invalid year'

// enroll student - 
//   accesses student object in students collection
//   enrolls them in the course (using addCourse() method of student)

// add grade - 
//   - takes three arguments: name, course, and grade
//   - updates courses property of student object with given name
//   - iterates over objects within courses array to find the one with the 
//   corresponding course name
//   - adds new property to that object, that is the grade
// report card:
//   - takes student's name as an argument
//   - iterates through objects in student's courses array
//   - builds an array of elements: 'course title: (grade || 'In Progress')'
//   - iterates over this new array and logs each entry
//   - what should it do if they have no courses? ***
// course report: 
//   - takes course name as an argument 
//   - iterate through student objects
//   - if student is enrolled in the course && has a grade 
//     - add that student object to an array
//   - build report: 
//     log: =[course name] Grades=
//     log: each student name: their grade
//     log: ---
//     log: course average
//       calculate by reducing array[grades] / array.length
//   if there is no student with a course by that name return `undefined`

// let school = {
//   students: [],
//   addStudent: function(name, year) {
//     const years = ['1st', '2nd', '3rd', '4th', '5th'];
//     if (years.includes(year)) {
//       let student = createStudent(name, year)
//       this.students.push(student);
//       return student;
//     } else {
//       console.log('Invalid year');
//     }
//   },
//   enrollStudent: function(studentName, course) {
//     for (i = 0; i < this.students.length; i += 1) {
//       if (this.students[i].name === studentName) {
//         this.students[i].addCourse(course);
//       }
//     }
//   },
//   addGrade: function(name, courseName, courseGrade) {
//     for (i = 0; i < this.students.length; i += 1) {
//       if (this.students[i].name === name) {
//         let student = this.students[i];
//         for (j = 0; j < student.courses.length; j += 1) {
//           if (student.courses[j].name === courseName) {
//             student.courses[j].grade = courseGrade; 
//           }
//         }
//       }
//     }
//   },
//   getReportCard: function(name) {
//     let grades = [];
//     for (let i = 0; i < this.students.length; i += 1) {
//       if (this.students[i].name === name) {
//         let student = this.students[i];
//         student.courses.forEach((course) => {
//           grades.push(`${course.name}: ${course.grade ? course.grade : 'In progress'}`);
//         });
//       }
//     }
//     grades.forEach((grade) => console.log(grade));
//   },
//   courseReport: function(courseName) {
//     let studentsWithGrades = [];
//     this.students.forEach((student) => {
//       for (let i = 0; i < student.courses.length; i += 1) {
//         if (student.courses[i].name === courseName 
//             && student.courses[i].grade) {
//               studentsWithGrades.push([student.name, student.courses[i].grade]);
//           }
//       }
//     });
  
//     if (studentsWithGrades.length === 0) return (undefined);

//     console.log(`=${courseName} Grades=`);
//     studentsWithGrades.forEach((student) => {
//       console.log(`${student[0]}: ${student[1]}`);
//     });
//     console.log('---');
//     let totalScores = studentsWithGrades.reduce((total, student) => {
//       return total += student[1];
//     }, 0);
//     console.log(`Course Average: ${totalScores / studentsWithGrades.length}`);
//   },
// };

// const foo = school.addStudent('foo', '3rd');
// school.enrollStudent('foo', { name: 'Math', code: 101 });
// school.enrollStudent('foo', { name: 'Advanced Math', code: 102 });
// school.enrollStudent('foo', { name: 'Physics', code: 202 });
// school.addGrade('foo', 'Math', 95);
// school.addGrade('foo', 'Advanced Math', 90);

// const bar = school.addStudent('bar', '1st');
// school.enrollStudent('bar', { name: 'Math', code: 101 });
// school.addGrade('bar', 'Math', 91);

// const qux = school.addStudent('qux', '2nd');
// school.enrollStudent('qux', { name: 'Math', code: 101 });
// school.enrollStudent('qux', { name: 'Advanced Math', code: 102 });
// school.addGrade('qux', 'Math', 93);
// school.addGrade('qux', 'Advanced Math', 90);

// console.log(school);
// school.students.forEach((student) => student.listCourses());


// In the style of the Course Solution - 
// uses student objects as arguments for subsequent functions
let school = {
  students: [],
  addStudent: function (name, year) {
    const years = ['1st', '2nd', '3rd', '4th', '5th'];
    if (years.includes(year)) {
      let student = createStudent(name, year)
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid year');
    }
  },
  enrollStudent: function (student, name, code) {
    student.addCourse({ name: name, code: code });
  },
  addGrade: function (student, courseName, courseGrade) {
    for (let i = 0; i < student.courses.length; i += 1) {
      if (student.courses[i].name === courseName) {
        student.courses[i].grade = courseGrade;
      }
    }
  },
  getReportCard: function (student) {
    let grades = [];
    student.courses.forEach((course) => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      }
    })
  },
  courseReport: function (courseName) {
    let studentsWithGrades = [];
    this.students.forEach((student) => {
      for (let i = 0; i < student.courses.length; i += 1) {
        if (student.courses[i].name === courseName
          && student.courses[i].grade) {
          studentsWithGrades.push([student.name, student.courses[i].grade]);
        }
      }
    });

    if (studentsWithGrades.length === 0) return (undefined);

    console.log(`=${courseName} Grades=`);
    studentsWithGrades.forEach((student) => {
      console.log(`${student[0]}: ${student[1]}`);
    });
    console.log('---');
    let totalScores = studentsWithGrades.reduce((total, student) => {
      return total += student[1];
    }, 0);
    console.log(`Course Average: ${totalScores / studentsWithGrades.length}`);
  },
};

const foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102 );
school.enrollStudent(foo, 'Physics', 202 );
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

const bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);

const qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

// only returning the properties that aren't methods for the three objects
console.log(foo);
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

console.log(bar);
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

console.log(qux);
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }


// school.getReportCard('foo');
// Math: 95
// Advanced Math: 90
// Physics: In progress

school.courseReport('Math');
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 93

school.courseReport('Advanced Math');
// =Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 90

school.courseReport('Physics');
// undefined