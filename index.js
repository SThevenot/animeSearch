/** @format */
var details = document.getElementById("details");
var select = document.getElementById("selector");
var localVar = {};

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

function saveToStorage() {
  var movieValue = select.value;
  localStorage.setItem("movieTitle", movieValue);
}

function updateSite() {
  var selectedMovie = localStorage.getItem("movieTitle");
  console.log(selectedMovie);
}

//save selected item to local storage
//grab from local storage when movie is selected
//grab needed data from api based on movie selected
//display to screen
