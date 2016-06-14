// Article object definition
var Article = function(date, title, text){
  this.date = date; // date as a string (for display)
  this.realdate = new Date(date); // date as javascript date (for js use)
  this.title = title;
  this.text = text;
}
// collection of all articles. FORMAT:
// new Article(
//  "article date",
//  "article title",
//  `article text (NOTE: Enclosed in backticks to preserve newlines)`
// ),
var index = [
  new Article(
    "April 4, 2016",
    "Sed dapibus lacus nisi",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ),
  new Article(
    "April 5, 2016",
    "Diam hendrerit ultrices ac et est",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ),
  new Article(
    "May 23, 2016",
    "Quisque a lectus consectetur",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ),
  new Article(
    "June 7, 2016",
    "Consectetur adipiscing elit",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ),
  new Article(
    "June 10, 2016",
    "Lorem ipsum dolor sit amet",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  ),
];
// to refer to an article, index[#].<info>

// place to insert articles into in HTML for display
var htmlIndex = document.getElementById("articles");
// sorting functions
function sortNewest(a,b){
  return b.realdate - a.realdate;
}
function sortOldest(a,b){
  return a.realdate - b.realdate;
}
// sort articles newest first by default
index.sort(sortNewest);

// array to hold the title <div>s of each article (for event listener use)
var htmlTitles = [];

// function that title <div>s call when clicked
function toggleDisplay(e){
  if(e.target.parentElement.className !== "article expanded"){
    e.target.parentElement.className += " expanded";
  } else {
    e.target.parentElement.className = "article";
  }
}

// call this function to update html display of articles
function display(){
  var insert = '';
  for(var i=0, j=index.length; i<j; i++){
    insert += '<div class="article"><div class="article-title"><div class="article-date">';
    insert += index[i].date;
    insert += '</div>'+index[i].title;
    insert += '</div><div class="article-text">';
    insert += index[i].text+'</div></div>';
  }
  htmlIndex.innerHTML = insert;
  htmlTitles = document.getElementsByClassName("article-title");
  for(var i=0, j=htmlTitles.length; i<j; i++){ // update Event Listeners
    htmlTitles[i].addEventListener("click", toggleDisplay);
  }
}
display(); // display articles on page load
