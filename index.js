/*
if (document.readyState !== "loading") {
  console.log("Document is ready");
  intializeCode();
} else {
  document.addEventListener("DOM content loaded", function () {
    console.log("Document ready after waiting!");
    intializeCode();
  });
}

function intializeCode() {
*/

console.log("Hello world!");

const addCommentsButton = document.getElementById("add-comment");

addCommentsButton.addEventListener("click", function () {
  const uList = document.getElementById("unordered-list");
  const textArea = document.getElementById("text-area");

  // https://www.w3schools.com/jsref/prop_textarea_value.asp

  let input = textArea.value;
  let newListItem = document.createElement("li");
  newListItem.innerHTML = input;

  uList.appendChild(newListItem);
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
