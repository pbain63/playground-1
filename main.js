function evenOrOdd() {
  const num = parseFloat(prompt("Enter the number"));

  if (num % 2 === 1) {
    alert("Number is odd");
  } else if (num % 2 === 0) {
    alert("Even");
  }
}

evenOrOdd();
