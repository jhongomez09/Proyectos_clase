function verifySpaces(){
    const name = document.getElementById('name').Value
    const lastName = document.getElementById('lastName').Value
    const numCard = document.getElementById('numCard').Value
    const endDate = document.getElementById('endDate').Value
    const cvvCode = document.getElementById('cvvCode').Value

    const array = [name, lastName, numCard, endDate, cvvCode]

    let banderita = true //verdaderos o falsos

    for(let contador = 0; contador <= array.length; contador++){
        if (array[contador] === ""){
          console.log(contador)
          console.log(array[contador])
          banderita = false
        }
    }

    if(banderita === true)
    swal({
        title: "Transaccion exitosa!",
        text: "Diligenciado correctamente!",
        icon: "success",
      });
}

