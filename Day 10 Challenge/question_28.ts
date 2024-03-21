// Program written by [Muhammad Tayyab]
// Date:11-03-2024

/*
Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

Explain & TIP: Use age to check the life stage. This practice shows how to handle multiple
conditions with an if-else chain.
*/

let age: number = 21;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 12) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager ");
} else if (age < 30) {
  console.log("The person is an adult.");
} else if (age < 60) {
  console.log("The person is an elder.");
} else {
  console.log("The person is an elderly.");
}
