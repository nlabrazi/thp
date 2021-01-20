
const steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
]
var d=0
function convertDtoF(f){
  d = Math.round((f-32)/1.8);
  return d;
}

function Recipe (title, steps) {
  let recipe = Object.create(Recipe.prototype)
  recipe.title = title
  recipe.steps = steps

  return recipe
}

Recipe.prototype.cook = function () {
  let step = this.steps;
  let etape = [];
  console.log("liste ingredient : ");
  for(let i = 0 ; i < step.length; i++){
    //if dry Add X (number of unity) Y (unity) of Z (ingredient) to the bowl
    if(step[i][3] == "dry"){
      console.log(`add ${step[i][0]} ${step[i][1]} of ${step[i][2]} to the bowl`)
    }
    //else if wet For X (number of unity) Y (unity) of Z (ingredient) to the bowl
    else if(step[i][3] == "wet"){
      console.log(`For ${step[i][0]} ${step[i][1]} of ${step[i][2]} to the bowl`)
    }
    else if(i == step.length-2){
      console.log(`${step[i]}`);
    }
    // Then, heat X minutes in the oven at Y degrees
    else if(i == step.length-1){
      console.log(`Then, heat ${step[i][1]} minutes in the oven at ${convertDtoF(step[i][0])} degrees`);
    }
  }
  // Cook hoven

}

Recipe.prototype.sayHi = function () {
  console.log(`Hey ! I'm ${this.title}.`);
  console.log(`Hey ! I'm ${this.steps}.`)
}

const cookie = Recipe('Cookie Vegan', steps)

cookie.cook();

// D = (F-32)/1.8
