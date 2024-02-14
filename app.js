const $users = document.querySelector("#usersList");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    for (const user of data) {
      $users.innerHTML += CreateUser(user);
    }
  });

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
