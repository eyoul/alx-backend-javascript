export default function getListStudentIds() {
  if (students instanceof Array) {
    return students.map((student) => student.id);
    }
    return [];
}
