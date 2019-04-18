var repoList = document.querySelector("#repos-list");
var listItem = document.querySelector("#repos-list li ");
listItem.style.display = "none";
var url = "https://api.github.com/users/youssef910/repos";
function gettingMyGitHub() {
  fetch(url)
    .then(request => request.json())
    .then(repoList =>
      repoList.forEach(function(repo) {
        var newListItem = document.createElement("li");
        listItem.insertAdjacentElement("afterend", newListItem);
        newListItem.innerHTML = repo.full_name + "<br>" + repo.html_url.link();
      })
    );
}
gettingMyGitHub();
