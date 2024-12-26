function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane Doe";
console.log(greeter(user)); // Works Correctly

// Alternative solution
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let userArray = ["Jane", "Doe"];
console.log(greeterArray(userArray)); // Works Correctly