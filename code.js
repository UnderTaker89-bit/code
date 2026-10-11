function calculateAverage(grades) {
  if (!Array.isArray(grades) || grades.length === 0) {
    console.error('Помилка: Переданий параметр повинен бути непорожнім масивом.');
    return;
  }

  let totalSum = 0;

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    if (typeof grade !== 'number' || isNaN(grade)) {
      console.error(`Помилка: Елемент на індексі ${i} (${grade}) не є числом.`);
      return;
    }

    if (grade < 0 || grade > 100) {
      console.error(`Помилка: Оцінка ${grade} на індексі ${i} знаходиться поза допустимим діапазоном (0 - 100).`);
      return;
    }

    totalSum += grade;
  }

  let average = totalSum / grades.length;
  console.log(`Середня оцінка студента: ${average.toFixed(2)}`);
  return average;
}


let student1 = [];
let student2 = [60, 75, 70, 68, 80, 72];
let student3 = [85, 90, 78, 92, 88, 'A'];
let student4 = [100, 98, 96, 111, 99];
let student5 = [50, 62, 58, 71];

console.log("— Перевірка Студента 1 —");
calculateAverage(student1);

console.log("\n— Перевірка Студента 2 —");
calculateAverage(student2);

console.log("\n— Перевірка Студента 3 —");
calculateAverage(student3);

console.log("\n— Перевірка Студента 4 —");
calculateAverage(student4);

console.log("\n— Перевірка Студента 5 —");
calculateAverage(student5);