var food
food = "Chicken";

function eat() {
  var food;
  food = "half-chicken";
  console.log(food); // < food inside eat()
  food = "gone";       // CAREFUL!  modified food inside eat()
  console.log(food); // < food inside eat()
}



eat(); // food in eat is modified, but not modified in this scope
console.log(food); // < food this scope(not inside eat()
