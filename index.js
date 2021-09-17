console.log("Hello world!");

const addCommentsButton = document.getElementById("add-comment");

addCommentsButton.addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  const userRating = document.getElementById("rating");

  let input = textArea.value;
  let grade = userRating.value;

  //const uList = document.getElementById("unordered-list");
  //let newListItem = document.createElement("li");
  //newListItem.innerHTML = input;
  //uList.appendChild(newListItem);

  let newDiv = document.createElement("div");
  newDiv.className = "comment";

  let divChildRating = document.createElement("div");
  divChildRating.className = "comment-rating";

  let divChildText = document.createElement("div");
  divChildText.className = "comment-text";

  let ratingTextNode = document.createTextNode(grade);
  let inputTextNode = document.createTextNode(input);

  divChildRating.appendChild(ratingTextNode);
  divChildText.appendChild(inputTextNode);

  newDiv.appendChild(divChildRating);
  newDiv.appendChild(divChildText);
});

const addRemoveCommentsButton = document.getElementById("remove-comments");

addRemoveCommentsButton.addEventListener("click", function () {
  const uList = document.getElementById("unordered-list");

  // https://www.w3schools.com/jsref/met_win_confirm.asp
  // https://stackoverflow.com/questions/10750137/remove-all-li-from-ul/10750192

  // https://stackoverflow.com/questions/63311845/unexpected-use-of-confirm-no-restricted-globals

  let txt;
  let r = window.confirm("Are you sure?");
  if (r === true) {
    txt = "List cleared succesfully.";
    while (uList.firstChild) {
      uList.removeChild(uList.firstChild);
    }
  } else {
    txt = "Action cancelled.";
  }
  document.getElementById("list-clear").innerHTML = txt;
});
