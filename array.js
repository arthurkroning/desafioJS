const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
]


//1
const names = students.forEach(student => console.log(student.name));

//2
const result = students.forEach(student => {
    if (student.age > 20) {
        console.log(student.name);
    }
});

//3
const scholarshipStudent = students.forEach(student => {
    if (student.scholarship === true) {
        console.log(student.name);
    }
});