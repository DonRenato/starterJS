var botaoElement = document.getElementById('square');
var squareElement = document.getElementById('quadrado');


botaoElement.onclick = function(){
    var square = document.createElement('div');

        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = '#f00';

        squareElement.appendChild(square);

}



