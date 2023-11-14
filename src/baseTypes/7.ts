/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(weekendDay: string): boolean {
  if (weekendDay === "Saturday" || weekendDay === "Sunday") {
    return true;
  } else {
    return false
  }
}

console.log(isWeekend(Day.Saturday));

