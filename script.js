

    function edadSumar(a, b, c){
        if(a>=b){
            if(a>=c){
                console.log('la edad más alta es ' + a )
            }
        }
        else if(b>=c){
            console.log('la edad más alta es ' + b )
        
        }else{
            console.log('la edad más alta es ' + c )
        }
    }

    var dato1 = prompt('ingrese edad 1:')
    var dato2 = prompt('Ingrese edad 2:')
    var dato3 = prompt('Ingrese edad 3:')

    edadSumar(dato1, dato2, dato3)