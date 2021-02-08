function getNum(){
    //capturar el valor del input id num
    const value = document.getElementById("num").value

    //imprimir valor capturado
    console.log("capturado" + value)

    //Enviar el value
    return value
}
   
function sayMe(){
    //llama la funcion getNum y guarda el resultado en la variable
    const num = getNum()

    //imprimir por consola el valor almacenado en la variable
    console.log("capture este valor" + num)

    if(num > 0){
        alert("Este numero es positivo")
    } else if (num < 0){
        alert("el numero es negativo")
    } else if(num == "0"){
        alert("El numero es 0")
    } else if(num === ""){
        alert("por favor ingresa un numero")
    } 
    clean()
 
}   

function clean(){
    document.getElementById("num").value = null
    document.getElementById("textToUse").value = null
}
function getText(){
    //Almacen dentro de una variable
    const newText = document.getElementById("textToUse").value
    return newText
}
function changeText(){
    //llama la funcion getTect() y almacena dentro de la varibale el valor devuelto
    const content = getText()

    //cambia el texto dentro de la etiqueta por medio 
    document.getElementById("paragraph").innerHTML = content 
    clean()

}       

