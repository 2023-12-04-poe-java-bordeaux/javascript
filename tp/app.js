// List of technologies
const frameworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Node.js & Express",
  "Angular",
  "Symfony",
  "Laravel",
  "Django",
  "Javascript",
  "Express.js",
  "Meteor",
  "PostgreSQL",
  "HTML",
  "CSS",
  "React.js & Redux",
  "Mongo DB",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function replaceTechnologies() {
  const technos = document.querySelectorAll(".techno");
  console.log("#Previous values\n===============");
  technos.forEach((t, i) => console.log(`${i + 1} - ${t.innerText}`));
  const usedIndices = new Set();//{0}

  technos.forEach((techno) => {
    let randomIndex = getRandomIndex(frameworks.length);//0

    while (usedIndices.has(randomIndex)) {//0 2
      randomIndex = getRandomIndex(frameworks.length);//2
    }
    usedIndices.add(randomIndex);

    const previousValue = techno.textContent;
    const newValue = frameworks[randomIndex];

    if (previousValue !== newValue) {
      techno.classList.add("changed");
    } else {
      techno.classList.remove("changed");
    }

    techno.textContent = newValue;
  });
}

const randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", replaceTechnologies);
