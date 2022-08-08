let BASE_URL = "https://fakestoreapi.com";

async function fetchScructure(url) {
  let endpoint = `${BASE_URL}${url}`;
  try {
    let res = await fetch(endpoint);
    let data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function createTemplate(template) {
  erasePage();
  var temp = document.querySelector(template);
  var clon = temp.content.cloneNode(true);
  document.body.querySelector("main").appendChild(clon);
}

async function getUsers() {
  var main = document.querySelector("main");
  let users = await fetchScructure("/users");
  users.forEach((user) => {
    let li = document.createElement("li");
    li.innerText = `${user.name.firstname} ${user.name.lastname}`;
    main.appendChild(li);
  });
}

async function getWinners() {
  var main = document.querySelector("main");
  let users = await fetchScructure("/users?limit=3");
  users.forEach((user, i) => {
    let li = document.createElement("li");
    li.innerText = `${(i += 1)}- ${user.name.firstname} ${user.name.lastname}`;
    main.appendChild(li);
  });
}

function erasePage() {
  var main = document.querySelector("main");
  main.innerHTML = "";
}
