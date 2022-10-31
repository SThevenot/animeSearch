/** @format */

var select = document.getElementById("selector");

function getGhibli() {
  var requestUrl = "https://ghibliapi.herokuapp.com/films";
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var optionItem = document.createElement("option");
        optionItem.textContent = data[i].title;
        select.appendChild(optionItem);
      }
    });
}
