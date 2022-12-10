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

//************************************//
function factorial(num) {
    if (num == 0) return 1

    return num * factorial(num - 1)
}

// input 5
// 5 * factorial(4)
// 4 * factorial(3)
// 3 * factorial(2)
// 2 * factorial(1)
// 1 * factorial(0)
// 1

// 1                    1
// 
// 
// 
// 
// 4 * 3 * 2 * 1 * factorial(0)