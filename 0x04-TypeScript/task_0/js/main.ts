interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const [student1, student2] = [
  {
    firstName: "Eyoul",
    lastName: "Wagaye",
    age: 12,
    location: "Addis Ababa"
  },
  {
    firstName: "Abebe",
    lastName: "Yoseph",
    age: 12,
    location: "Nazeret"
  },
]

const studentsList : Array<Student> = [student1, student2]
