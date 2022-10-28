/** @format */
const localVar = {};
const detailsContainer = document.getElementById("details");

window.onload = () => {
  fetchData().then((ghibliApiObject) => {
    console.log(ghibliApiObject);
    localVar["cloudObj"] = ghibliApiObject;
    readStudioGhibli(ghibliApiObject);
  });
};

async function fetchData() {
  var myRequest = new Request("https://ghibliapi.herokuapp.com/films");
  const returnVal = await fetch(myRequest, {
    method: "GET",
    mode: "cors",
    cache: "default",
    credentials: "omit",
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })
    .then(function (response) {
      console.log(response.text());
    })
    .then(function (parsing) {
      var parsedObject = JSON.parse(parsing);

      return parsedObject;
    })
    .catch(function(error) {
        var p = document.createElement('p');
        p.appendChild(
          document.createTextNode('Error: ' + error.message)
        );
        document.querySelectorAll(".descriptionContainer")[0].innerHTML = "";
        document.querySelectorAll(".descriptionContainer")[0].appendChild(p);
      });
  return returnVal;
}

function readStudioGhibli(ghibliApiObject) {
  const ghibliFilms = Object.entries(ghibliApiObject);
  const objectSize = ghibliFilms.length;
  for (var i = 0; i < objectSize; i++) {
    var option = document.createElement("option");
    option.value = ghibliFilms[i][1];
    option.innerText = ghibliFilms[i][1];
    detailsContainer.appendChild(option);
    console.log(ghibliFilms[i]);
  }
}
