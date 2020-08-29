function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // (optional) sort highscores by score property in descending order
  highscores.sort( function (a, b) {
    return b.score - a.score;
  }); 

  highscores.forEach(function (score) {
  // create li tag for each high score
  var liTag = document.createElement("li");
  liTag.textContent = score.initials + " - " + score.score;

  // display on page
  var olEl = document.getElementById ("highscores");
  olEL.appendChild(liTag);
}):

function clearHighscores() {

  //get highscores from local storage 
  window.localStorage.removeItem("highscores");

  //reload the webpage 
  window.location.reload();

}

// attache clear event to clear score button
document.getElementById ("clear").onclick = clearHighscores;

// Print high scores saved 
printHighscores();