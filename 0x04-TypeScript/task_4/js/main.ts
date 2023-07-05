export const cpp: string = "Cpp Subjects";
export const java: string = "Java Subjects";
export const react: string = "React Subjects";

export interface Teacher {
  experienceTeachingC: number;
}

export const cTeacher: Teacher = {
  experienceTeachingC: 10,
};

export function getRequirements(subject: string): string {
  return `Requirements for ${subject}`;
}

export function getAvailableTeacher(subject: string, teacher: Teacher): string {
  return `Available teacher for ${subject}: ${teacher.experienceTeachingC} years of experience in teaching C`;
}

console.log("C++");
console.log(getRequirements(cpp));
console.log(getAvailableTeacher(cpp, cTeacher));

console.log("Java");
console.log(getRequirements(java));
console.log(getAvailableTeacher(java, cTeacher));

console.log("React");
console.log(getRequirements(react));
console.log(getAvailableTeacher(react, cTeacher));

