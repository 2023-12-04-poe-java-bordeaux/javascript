import users from "./users.js";

const $users = document.querySelector("#usersList");

for (const user of users) {
  $users.innerHTML += CreateUser(user);
}

function CreateUser(user) {
  return `
    <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
        <td><a href="details.html?id=${user.id}">Voir</a></td>
    </tr>
    `;
}
