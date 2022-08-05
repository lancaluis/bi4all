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
  var temp = document.querySelector(template);
  var clon = temp.content.cloneNode(true);
  document.body.querySelector("main").appendChild(clon);
}

async function getUsers() {
  let users = await fetchScructure("/users");
  return console.log(users)
}
