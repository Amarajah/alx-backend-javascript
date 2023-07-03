export default function getStudentsByLocation(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
    return listOfStudents.filter((student) => student.location);
}
