//let the user to enter their age
let age = parseInt(prompt("Enter your age: "));

if (age < 13) {
  console.log("You are a child");
} else if (age >= 13 && age < 20) {
  console.log("You are a teenager");
} else if (age >= 20) {
  console.log("You are a young adult");
}