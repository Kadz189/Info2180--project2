/*

Kadeem Samuda - 620075599
Project 2 - 15 Puzzle

Extra Feature(s) - Animation and number of moves


*/


"use strict";
window.onload = function(){
var tile = document.querySelectorAll("#puzzlearea div");
var xpos=0;
var ypos= 0;
var BLANKTOP= "300px";
var BLANKLEFT= "300px";
var BLOCKTOP, BLOCKLEFT;
var moveCount = 0;



    for(var i=0; i < tile.length; i++){
        tile[i].setAttribute("class", "puzzlepiece") ;
        tile[i].style.left= xpos + 'px';
        tile[i].style.top= ypos + 'px';
        tile[i].style.backgroundPosition= "-" + xpos + "px " + "-" + ypos + "px";
        if (xpos < 300){
          xpos+=100;
        }
        else{
            xpos=0;
            ypos+=100;
        }
    }

    var shufflebutton= document.getElementById('shufflebutton');
    shufflebutton.addEventListener("click", shuffle);
     for(var i=0; i < tile.length; i++){
          (function(index) {
            tile[index].addEventListener("mouseover", function(){
            validMove(this);
            });
            tile[index].addEventListener("click", function(){
            if (validMove(this)){
                     move(tile[index]);
            }
            });
            tile[index].addEventListener("mouseout", function(){
                       this.setAttribute("class", "puzzlepiece");
            });
          })(i);

     }

     function shuffle(){
         var piece;
         for (var i=0; i<100; i++){
                 piece=  Math.floor(Math.random() * 15);
                 move(tile[piece]);
         }
     }


    function move(puzzlepiece){
            BLOCKTOP=puzzlepiece.offsetTop;
            BLOCKLEFT=puzzlepiece.offsetLeft;
            puzzlepiece.setAttribute("id", "selected");
            $('#selected').animate({
                backgroundImage: "url(background.jpg)",
                border: "2px solid black",
                height: "96px",
                lineHeight: "96px",
                position: "absolute",
                textAlign: "center",
                verticalAlign: "middle",
                width: "96px",
                left: BLANKLEFT,
                top: BLANKTOP
             });
              puzzlepiece.style.top = BLANKTOP;
              puzzlepiece.style.left = BLANKLEFT;
              BLANKTOP= BLOCKTOP + "px";
              BLANKLEFT=BLOCKLEFT + "px";
              puzzlepiece.removeAttribute("id");
    }


    function validMove(puzzlepiece){
                BLOCKTOP=puzzlepiece.offsetTop;
                BLOCKLEFT= puzzlepiece.offsetLeft;
                var top= BLOCKTOP + "px";
                var left= BLOCKLEFT + "px";

                var testleft= Math.abs(parseInt(left) - parseInt(BLANKLEFT));
                if (top == BLANKTOP && testleft==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;

                       }

                var testright= Math.abs(parseInt(top) - parseInt(BLANKTOP));
                if (left == BLANKLEFT && testright==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;

                       }

    }
}
