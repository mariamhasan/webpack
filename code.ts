interface student {
  id: string;
  name: string;
}

function logStudent(student: student) {
  console.log(`${student.id}: ${student.name}`);
}

console.log({ id: 7, name: "omar" });
