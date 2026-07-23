// The code should return the names of students who scored 70 or above.

const students = [
  { name: "Alice", score: 82 },
  { name: "Bob", score: 65 },
  { name: "Charlie", score: 91 },
  { name: "David", score: 70 }
];

const passedStudents = students
  .filter(student =>
    student.score >= 70)
  .map(student => student.name);

console.log(passedStudents);

// Expected output:
// ["Alice", "Charlie", "David"]
