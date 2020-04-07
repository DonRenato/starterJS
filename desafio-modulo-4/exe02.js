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

function listRepositories(){
    var user = textElement.value;

    if(!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function(response){
            renderRepositories(response.data);
        })
}