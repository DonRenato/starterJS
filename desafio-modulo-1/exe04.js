var anosEstudos = 3;

function experiencia(anos){
        if ( anos <= 1)
            console.log('Iniciante');
        else if(anos <= 3)
               console.log('Intermediario');
        else if( anos <=6)
                console.log('Avancado');
            else                                
            console.log('Jedi Master');
}

console.log(experiencia(anosEstudos));