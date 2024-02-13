// 1. SANS MAP
const fruits = ["pomme", "banane", "orange"];

// 1.1. Fruits en majuscule
const fruitMaj = [];

for (const fruit of fruits) {
  fruitMaj.push(fruit.toUpperCase());
}

console.log("fuitMaj : ", fruitMaj);
// 1.2. Fruits au pluriel
const fruitPluriel = [];
for (const fruit of fruits) {
  fruitPluriel.push(`${fruit}s`);
}
console.log("fuitPluriel : ", fruitPluriel);

// 1. AVEC MAP

// 1.1. Fruits en majuscule
// const fruitMajMap = fruits.map(function (fruit) {
//   return fruit.toUpperCase();
// });

// const fruitMajMap = fruits.map((fruit) => {
//   return fruit.toUpperCase();
// });

const fruitMajMap = fruits.map((fruit) => fruit.toUpperCase());

console.log("fuitMaj map : ", fruitMajMap);
// 1.2. Fruits au pluriel
const fruitPlurielMap = fruits.map((fruit) => `${fruit}s`);

console.log("fuitPluriel Map : ", fruitPlurielMap);

const numbers = [2, 3, 4, 5, 7, 8, 9];
const numbersCarre = numbers.map((num) => Math.pow(num, 2));
console.log("Numbers au Carré : ", numbersCarre);

const numberGreaterThan5Map = numbers.map((num) => {
  //   if (num > 5) {
  //     return num;
  //   }
  return num > 5;
});
console.log("numberGreaterThan5Map : ", numberGreaterThan5Map);

const numberGreaterThan5Filter = numbers.filter((num) => {
  //   if (num > 5) {
  //     return num;
  //   }
  return num > 5;
});

console.log("numberGreaterThan5Filter : ", numberGreaterThan5Filter);

const numberGreaterThan5Find = numbers.find((num) => {
  //   if (num > 5) {
  //     return num;
  //   }
  return num > 5;
});

console.log("numberGreaterThan5Find : ", numberGreaterThan5Find);

// USE CASE
const tasks = [
  { id: 1, label: "Coder", completed: true, priority: 1 },
  { id: 2, label: "Dormir", completed: false, priority: 2 },
  { id: 3, label: "Manger", completed: true, priority: 1 },
  { id: 4, label: "Rien faire", completed: false, priority: 3 },
];
//  { id: 1, task: "Coder", priority: "High" },

const TaskPriority = {
  1: "High",
  2: "Medium",
  3: "Low",
};

// const tasks2 = tasks.map((task) => {
//   return {
//     id: task.id,
//     task: task.label,
//     priority: TaskPriority[task.priority],
//   };
// });

// const tasks2 = tasks.map(({ id, label, priority }) => {
//   return {
//     id,
//     label,
//     priority: TaskPriority[priority],
//   };
// });

const tasks2 = tasks.map(({ id, label, priority }) => ({
  id,
  label,
  priority: TaskPriority[priority],
}));

console.log("Tasks : ", tasks2);
