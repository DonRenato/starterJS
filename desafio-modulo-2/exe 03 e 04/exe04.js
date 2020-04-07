var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

var nomes = [
    'Diego',
    'Gabriel',
    'Lucas'
]

   
function adicionarItem(text){

   var lista = document.createElement('li');
   var texto = document.createTextNode(text);
  
    lista.appendChild(texto);
    listElement.appendChild(lista);
    
}


function adicionar(){
    adicionarItem(inputElement.value);
    inputElement.value = '';
    
}

function listar(){
    for( nome of nomes){
        adicionarItem(nome);
    }
}

listar();

