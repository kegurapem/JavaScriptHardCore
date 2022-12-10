// Para aprender recursión, hay que aprender RECURSIÓN.

//****************** RECURSIÓN ******************//
function cuentaRegresiva(num) {
    console.log(num)
    if (num === 0) {
        return 'Fin'
    } else {
        cuentaRegresiva(num - 1)
    }
    
}

cuentaRegresiva(10)