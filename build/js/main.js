"use strict";
// index signature
const todaysTransactions = {
    Books: -19,
    Pizza: -5,
    Job: 50
};
const student = {
    name: 'Jake',
    GPA: 3.5,
    classes: [342, 441, 441, 441]
};
//console.log(student.test);
// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`)
// }
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
