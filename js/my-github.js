var mainContainer = document.querySelector(".my-auto");
var newDiv = document.createElement("div");
newDiv.className = "search-result-div-container";
mainContainer.insertAdjacentElement("beforeend", newDiv);
var searchForNameParagraph = document.createElement("P");
newDiv.appendChild(searchForNameParagraph);
var countReposDiv = document.createElement("div");
searchForNameParagraph.insertAdjacentElement("afterend", countReposDiv);
var numberOfReposLink = document.createElement("a");
countReposDiv.appendChild(numberOfReposLink);
numberOfReposLink.href = "#";
searchForNameParagraph.innerHTML = "<br> Filter PRs by user";
searchForNameParagraph.style.backgroundColor = "#3CE6E6";
searchForNameParagraph.style.color = "#0D0D4D ";
searchForNameParagraph.style.fontSize = "x-large";
searchForNameParagraph.style.textAlign = "center";
var searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.className = "inputValue";
newDiv.appendChild(searchInput);
var submitBtn = document.createElement("button");
submitBtn.innerHTML = "SUBMIT";
searchInput.insertAdjacentElement("afterend", submitBtn);
var listOfSearcResult = document.createElement("ul");
newDiv.appendChild(listOfSearcResult);
document.querySelector("p.mb-5").innerHTML = " ";
var repoList = document.querySelector("#repos-list");
var listItem = document.querySelector("#repos-list li ");
listItem.style.display = "none";
var repoCount = document.querySelector("#repos-count");

// Requirement 1: Show my Repos//
//Requirement 2: Add a link to my repo//
var url = "https://api.github.com/users/youssef910/repos";
function gettingMyGitHub() {
  fetch(url)
    .then(request => request.json())
    .then(function(repoList) {
      repoCount.innerHTML = repoList.length;
      //Requirement 3: Display the number of Repos//
      repoList.forEach(function(repo) {
        var newListItem = document.createElement("li");
        listItem.insertAdjacentElement("afterend", newListItem);
        newListItem.innerHTML =
          repo.full_name + "<br>" + repo.html_url.link(repo.html_url);
      });
    });
}
gettingMyGitHub();

//Part 3: Update My Github Page to show other Github user's repos//
submitBtn.addEventListener("click", function() {
  var gitHubUserName = searchInput.value;
  //stretch goal: if the search box is empty then it should default to my User)//
  if (gitHubUserName === "") {
    gitHubUserName = "youssef910";
  } else {
    gitHubUserName = searchInput.value;
  }
  fetch("https://api.github.com/users/" + gitHubUserName + "/repos")
    .then(request => request.json())
    .then(function(repos) {
      //Requirement 3: Display the number of Repos//
      numberOfReposLink.innerHTML = repos.length;
      numberOfReposLink.insertAdjacentText(
        "beforebegin",
        gitHubUserName.toUpperCase() + " HAS "
      );
      numberOfReposLink.insertAdjacentText(
        "afterend",
        " REPOS ON His/Her GITHUB."
      );
      repos.forEach(function(repos) {
        var searcListItem = document.createElement("li");
        listOfSearcResult.appendChild(searcListItem);
        searcListItem.innerHTML =
          repos.full_name + "<br>" + repos.html_url.link(repos.html_url);
        searchInput.value = "";
      });
    });
});
