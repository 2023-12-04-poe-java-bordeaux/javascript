const framworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Angular",
  "Symfony",
  "Laravel",
  "Dynamo",
];

const technos = document.querySelector(".technos");

// for (const framwork of framworks) {
//   technos.innerHTML += `<li>${framwork}</li>`;
// }

const addTechButton = document.querySelector("#add-tech");

addTechButton.addEventListener("click", function () {
  const elementToInsert = framworks.shift();
  technos.innerHTML += `<li>${elementToInsert}</li>`;
  console.log(framworks);
});
