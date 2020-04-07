//ex 01

var endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'Sao Paulo',
    uf: 'SP'
}



function exibeEndereco(endereco){
    

    return ('O usuario mora em ' + endereco.cidade + '/' 
        + endereco.uf +', no bairro ' + endereco.bairro +  ', na ' 
         + endereco.rua + ' com o nº ' + endereco.numero +'.');
}


console.log(exibeEndereco(endereco));


