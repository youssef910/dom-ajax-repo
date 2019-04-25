var container = document.querySelector(".my-auto");
var newDiv = document.createElement("div");
container.appendChild(newDiv);
var viewResults = document.createElement("button");
newDiv.appendChild(viewResults);
viewResults.innerHTML = "Get a Dog Photo";
var paragraphDescribtion = document.createElement("p");
viewResults.insertAdjacentElement("beforeBegin", paragraphDescribtion);
paragraphDescribtion.innerHTML = "click here to get a awesome Dog Photo";
var image = document.createElement("IMG");
newDiv.insertAdjacentElement("afterend", image);

image.setAttribute("width", "auto");
image.setAttribute("height", "auto");
image.setAttribute("alt", "The Pulpit Rock");

//Bonus Task: Random API
function getADog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(function(result) {
      image.setAttribute("src", result.message);
    });
}
viewResults.addEventListener("click", getADog);

getADog();
