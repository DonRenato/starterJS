var botaoElement = document.getElementById('square');
var squareElement = document.getElementById('quadrado');

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }

botaoElement.onclick = function(){
    var square = document.createElement('div');

        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = '#f00';

        square.onmouseover = function(){
            square.style.backgroundColor = getRandomColor();
        }

        squareElement.appendChild(square);

}




   

  


