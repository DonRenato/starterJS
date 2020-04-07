var listElement = document.querySelector('ul');


var nomes = [
    'Diego',
    'Gabriel',
    'Lucas'
]

function renderNomes(){
  
    for( nome of nomes){
        var nomeElement = document.createElement('li');
        var nomeText = document.createTextNode(nome);

        nomeElement.appendChild(nomeText);
        listElement.appendChild(nomeElement);

    }

    
}


renderNomes();