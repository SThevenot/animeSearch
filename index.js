/** @format */
const localVar = {};
const detailsContainer = document.getElementById("deets");

window.onload = () => {
  fetchInfoWithFilter().then((ghibliApiObject) => {
    //console.log(ghibliApiObject);
    localVar["cloudObj"] = ghibliApiObject;
    readStudioGhibliObject(ghibliApiObject);
  });
};
