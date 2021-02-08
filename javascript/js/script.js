function sayMe(num) {
    if (num > 0){
        console.log(num)
      alert('Este numero es positivo')
      
    } 
    else if (num <0){
        console.log(num)
        alert("Este numero es negativo")
    }
    else if (num === 0){
        console.log(num)
        alert("El numero es 0")
    }
    else if (num === null){
        console.log(num)
        alert("El numero es nulo")
    }
    else if (num === undefined){
        console.log(num)
        alert("valor vacio")
    }
}

function hervirAgua(){
    let temperatura= 0;
    
    
    for(temperatura; temperatura <= 10; temperatura++){
        console.log(temperatura + "grados")

        if (temperatura === 10){
            alert("el agua ya esta hervida")
        }
    }
         
}