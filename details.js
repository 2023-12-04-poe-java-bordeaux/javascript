const $root = document.querySelector("#root");

const urlParams = new URLSearchParams(location.search);
const id = parseInt(urlParams.get("id"));

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (user) {
      if (user.id) {
        document.title = `Détails ${user.name}`;
        $root.innerHTML = CreateUserDetails(user);
      } else {
        $root.innerHTML = `<h1>404 Not Found</h1>
        <p>User with id ${id} doesn't exist</p>`;
      }
    });

function CreateUserDetails(user) {
  return `
    <h1>${user.name}</h1>
    <h2><a href="mailto:${user.email}">${user.email}</a></h2>
    <p><b>Company : </b>${user.company.name}</p>
    <p>Phone : <a href="tel:${user.phone}">${user.phone}</a></p>
  `;
}