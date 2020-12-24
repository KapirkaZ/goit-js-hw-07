const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const list = document.createElement("ul");

ingredients.forEach(function (ingredient) {
  let li = document.createElement("li");
  li.textContent = ingredient;
  list.appendChild(li);
});

console.log(list);

const getList = document.querySelector("#ingredients");
getList.appendChild(list);
// const ul = document.getElementById("ingredients");

// for (let i = 0; i < ingredients.length; i++) {
//   let ingredient = ingredients[i];
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(ingredient));
//   ul.appendChild(li);
// }

// for (var i = 0; i < ingredients.length; i++) {
//   let ingredient = ingredients[i];
//   let li = document.createElement("li");
//   li.innerHTML = ingredient;
//   document.getElementById("ingredients").appendChild(li);
// }
