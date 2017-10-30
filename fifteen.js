"use strict";

var COLS = 4;
var emptyRow = 3;
var emptyCol = 3;
var SQSIZE = 100;


$(function () {
    var parent = $("#puzzlearea");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});


function pageLoad() {
  createPuzzle();
  document.getElementById("shufflebutton").onclick = shufflePuzzle();
}

window.onload = pageLoad;
function createPuzzle() {
  var puzArea = document.getElementById("puzzlearea");
  var numSquares = puzArea.children.length;
  for (var i = 0; i < numSquares; i++) {
    var child = puzArea.children[i];
    child.className += "puzzlepiece";
    child.style.left = (SQSIZE * (i % COLS)) + "px";
    child.style.top = SQSIZE * Math.floor((i / COLS)) + "px";
  }
}
