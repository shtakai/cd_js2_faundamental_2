var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!"; // assignment first_variable on line#1
  console.log(first_variable); // just show first_variable on parent scope
}

//firstFunc(); //< if invoke this, first_variable is overwritten
console.log(first_variable); // now no assignment, so undefined
first_variable = "Yipee I was first!";
console.log(first_variable); // assignment on #9
