var pullRequestList = document.querySelector("#pull-requests-list");
var mainContainer = document.querySelector(".my-auto");
var newDiv = document.createElement("div");
mainContainer.insertAdjacentElement("beforeend", newDiv);
var searchForNameParagraph = document.createElement("P");
searchForNameParagraph.innerHTML = "<br> Filter PRs by user";
searchForNameParagraph.style.backgroundColor = "#3CE6E6";
searchForNameParagraph.style.color = "#0D0D4D ";
searchForNameParagraph.style.fontSize = "x-large";
searchForNameParagraph.style.textAlign = "center";
newDiv.appendChild(searchForNameParagraph);
var listOfSearcResult = document.createElement("ul");
newDiv.appendChild(listOfSearcResult);
pullRequestList.style.listStyleType = "disc";
var listItem = document.querySelector("#pull-requests-list li ");
listItem.innerHTML = " My bull requests";
listItem.style.backgroundColor = "#3CE6E6";
listItem.style.color = "#0D0D4D ";
listItem.style.fontSize = "x-large";
listItem.style.textAlign = "center";
var url = " https://api.github.com/repos/rarmatei/js-exercises/pulls";
var searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.className = "inputValue";
searchForNameParagraph.insertAdjacentElement("afterend", searchInput);

//Part 2: Show Pull Requests submitted against js-exercises
//Requirement 5: Show Only My Pull Requests

function getAllMyPullRequests() {
  fetch(url)
    .then(request => request.json())
    .then(pullRequests =>
      pullRequests
        .filter(function(pulls) {
          return pulls.user.login === "youssef910";
        })
        .forEach(function(pulls) {
          var newListItem = document.createElement("li");
          listItem.insertAdjacentElement("afterend", newListItem);
          newListItem.innerHTML =
            pulls.user.login + "<br>" + pulls.html_url.link(pulls.html_url);
        })
    );
}
getAllMyPullRequests();

//Requirement 6: Search for my friend's Pull Requests
searchInput.addEventListener("keyup", function(event) {
  var value = event.target.value.toLowerCase();
  fetch(url)
    .then(request => request.json())
    .then(function(pulls) {
      listOfSearcResult.innerHTML = "";
      pulls.forEach(function(pulls) {
        if (value === "") {
          return (value = "youssef910");
        }
        if (pulls.user.login.toLowerCase().indexOf(value) != -1) {
          var searcListItem = document.createElement("li");
          listOfSearcResult.appendChild(searcListItem);
          searcListItem.innerHTML =
            pulls.user.login + "<br>" + pulls.html_url.link(pulls.html_url);
        }
      });
    });
});
