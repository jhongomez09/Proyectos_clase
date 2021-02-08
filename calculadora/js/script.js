function getResult() {
    const result = document.getElementById("result").innerHTML  //innerHTML PARA CAPTURAR CONTENIDO dar NUEVO
    return result 
}

function setResult(value){
    document.getElementById("result").innerHTML = value //innerHTML PARA CAPTURAR CONTENIDO dar NUEVO
    }



function add(key){
    let result =  getResult()

    if (result != "0" || isNaN(key) ) {
        setResult(result+ key) //concatena el valor anterior con el pulsado
    }
    else {
        setResult(key)
    }
}
function calculate() {
    let result = eval(getResult())
    setResult(result)
}

function clean(){
    setResult(0)
}

for(let contador = 0; contador <= 100; contador++){
    setResult()
}