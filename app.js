const technos = document.querySelectorAll("li");
// const techno = document.querySelector("li");

// Bad practice
// for (const techno of technos) {
//   techno.style.backgroundColor = "indigo";
//   techno.style.fontSize = "20px";
//   techno.style.border = "1px solid orangered";
//   techno.style.color = "orangered";
// }

for (const techno of technos) {
  techno.addEventListener("click", function () {
    // console.log(techno.innerText);
    console.log(this.innerText);
    // this.classList.add("tech");

    // if (this.classList.contains("tech")) {
    //   this.classList.remove("tech");
    // } else {
    //   this.classList.add("tech");
    // }
    this.classList.toggle("tech");
  });
}

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
