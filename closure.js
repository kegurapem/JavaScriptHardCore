// Closures

function crearContador() {
    let contador = 0

    return function incrementar() {
        contador = contador + 1
        return contador
    }
}

const contador1 = crearContador()

console.log()

//****************************//

function crearsSaludo(saludo) {
    return function(nombre) {
        console.log( saludo, nombre)
    }
}

var saludar = crearsSaludo('Hey')
saludar('kevin')

//****************************//

function multiplicar(num1) {
    return function () {
        var num2 = 2
        return num1 * num2
    }
}

var multiplicaDosNumeros = multiplicar(15)

console.log(multiplicaDosNumeros())

//****************************//

function crearContador() {
    var count = 0
    return function () {
        count++
        return count
    }

}

var contadorPrime = crearContador()

console.log(contadorPrime())
console.log(contadorPrime())
console.log(contadorPrime())
console.log(contadorPrime())
