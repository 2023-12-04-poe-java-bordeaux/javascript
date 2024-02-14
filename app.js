const todos = [
  "Text a friend I haven't talked to in a long time",
  "Plan a vacation I've always wanted to take",
  "Take cat on a walk",
  "Go to the gym",
  "Have a photo session with some friends",
  "Learn calligraphy",
  "Learn Express.js",
  "Plan a trip to another country",
  "Take a hike at a local park",
  "Bake pastries for me and neighbor",
  "Contribute code or a monetary donation to an open-source software project",
  "Watch a classic movie",
  "Do something nice for someone I care about",
];

const $todos = document.querySelector("#todos");

for (const todo of todos) {
  const $todo = document.createElement("li");
  $todo.innerText = todo;
  $todo.classList.add("todo");

  const $deleteTodoBtn = document.createElement("button");
  $deleteTodoBtn.innerText = "x";

  $todo.addEventListener("click", function () {
    this.classList.toggle("finished");
  });

  $deleteTodoBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    this.parentElement.remove();
  });

  $todo.appendChild($deleteTodoBtn);
  $todos.appendChild($todo);
}

const $addTodoForm = document.querySelector("#addTodoForm");
const $newTodo = document.querySelector("#newTodo");

$addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log($newTodo.value);
});
