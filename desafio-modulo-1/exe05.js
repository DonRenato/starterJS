var usuarios =[
    {
        nome: 'Diego',
        habilidades : [
            'JavaScript',
            'ReactJS',
            'Redux'
        ]
    },
    {
        nome: 'Gabriel',
        habilidades : [
            'VueJs',
            'Ruby on Rails',
            'Elixir'
        ]
    }
] 

function exibir(usuarios){
   for (usuario of usuarios){
       console.log('0 ' + usuario.nome + ' possui as habilidades: '
        + usuario.habilidades.join(", "));
   }
}

console.log(exibir(usuarios));