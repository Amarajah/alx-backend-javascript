export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
  return listOfStudents.reduce((sum, student) => sum + student.id, 0);
}
