//*********************Ejemplo 1*************************//
function* gen() {
    yield 1
    yield 2
    yield 3
}

const generator = gen()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)

//*********************Ejemplo 2*************************//
function* iterate(array) {
    for (let value of array) {
        yield value
    }
}

const myArray = ['kevin', 'kegura', 'kumi', 'marvin', 'wendy']
const it = iterate(myArray)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())