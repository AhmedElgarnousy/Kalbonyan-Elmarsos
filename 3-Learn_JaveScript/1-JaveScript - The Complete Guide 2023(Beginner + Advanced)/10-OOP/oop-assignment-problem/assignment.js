class Course {
  courses = [];

  constructor(title, lenght, price) {
    this.title = title;
    this.lenght = lenght;
    this.price = price;
    this.courses.push([title, lenght]);
  }

  calcPriceAndLength() {
    console.log(this.courses);
  }

  nicdCourseSummary(courseTitle) {
    console.log(`course summary: ${courseTitle} is a nice course `);
  }
}

class PracticalCourse extends Course {
  constructor(numOfExercises) {
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log("publish some thing");
  }
}

const JaveSriptCourse = new Course("js", 3, "20$");
const PythonCourse = new Course("py", 2, "15$");

console.log(JaveSriptCourse);
console.log(PythonCourse);

const HistoryCourse = new TheoreticalCourse("history", 5, "15$");
const MathCourse = new PracticalCourse("history", 5, "15$", "170 ex");

console.log(MathCourse);
