const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  let ingredient = ingredients[i];
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(ingredient));
  ul.appendChild(li);
}

// for (var i = 0; i < ingredients.length; i++) {
//   let ingredient = ingredients[i];
//   let li = document.createElement("li");
//   li.innerHTML = ingredient;
//   document.getElementById("ingredients").appendChild(li);
// }
