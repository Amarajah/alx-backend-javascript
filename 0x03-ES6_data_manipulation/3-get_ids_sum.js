export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return [];
  }
    return listOfStudents.reduce((sum, student) => {
      return sum + student.id
    }, 0);
}
