// index signature

interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Books: -19,
  Pizza: -5,
  Job: 50
}

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions['Pizza'])

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Jake',
  GPA: 3.5,
  classes: [342, 441, 441, 441]
}

//console.log(student.test);

// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`)
// }

const logStudentKey = (student: Student, key: keyof Student) => {
  console.log(`${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA');
