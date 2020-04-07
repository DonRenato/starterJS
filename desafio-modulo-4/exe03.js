var listElement = document.querySelector('ul');
var textElement = document.querySelector('input');


function renderRepositories(repositories){
    listElement.innerHTML= '';
    for(repo of repositories){
        var textList = document.createTextNode(repo.name);
        var itemList = document.createElement('ul');

        itemList.appendChild(textList);
        listElement.appendChild(itemList);
    }
}

function renderLoading(){
    listElement.innerHTML = '';

    var textLoading = document.createTextNode('Loading...')
    var itemLoading = document.createElement('li');

    itemLoading.appendChild(textLoading);
    listElement.appendChild(itemLoading);
}

function renderError(loading){
    listElement.innerHTML = '';

    var textError = document.createTextNode('ERR0...')
    var itemError = document.createElement('li');

    itemError.style.color = '#f00';

    itemError.appendChild(textError);
    listElement.appendChild(itemError);
}
function listRepositories(){
    var user = textElement.value;

    if(!user) return;

    renderLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function(response){
            renderRepositories(response.data);
        }).catch(function(){
            renderError();
        })
}