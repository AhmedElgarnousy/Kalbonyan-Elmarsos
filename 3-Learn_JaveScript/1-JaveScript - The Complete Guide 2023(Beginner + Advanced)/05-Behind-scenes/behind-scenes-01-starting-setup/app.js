function getName() {
  return prompt("Enter a name");
}

function greet() {
  const name = getName();
  console.log("hello" + name);
}

greet();
