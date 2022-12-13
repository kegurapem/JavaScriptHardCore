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


//******************************************************************//

// STACKS: es una estructura de datos que funciona con LIFO

function Stack() {
    this.arr = []
}

Stack.prototype.push = function (value) {
    return this.arr.push(value)
}

Stack.prototype.pop = function () {
    return this.arr.pop()
}

Stack.prototype.size = function () {
    return this.arr.length
}


var miStack = new Stack()
console.log(miStack);
miStack.push(5)
miStack.push(8)
console.log(miStack);
miStack.pop()
console.log(miStack);
console.log(miStack.size());


// QUEUES:
// FIFO: First In First Out


//***************************************//
function Queue() {
    this.arr = []
 }
 
 Queue.prototype.enqueue = function (value) {
    return this.arr.unshift(value)
 }
 Queue.prototype.dequeue = function (value) {
    return this.arr.shift()
 }
 Queue.prototype.size = function () {
    return this.arr.length
 }

 let myQueue = new Queue()
 console.log(myQueue);
 myQueue.enqueue(5)
 myQueue.enqueue(2)
 myQueue.enqueue(3)
 myQueue.enqueue(1)
 console.log(myQueue)
 myQueue.dequeue(2)
 console.log(myQueue)



let array = ['hola', 5, true]

array.unshift(25)
console.log(array)



//*******************FIBONACCI***************************//
const fibonacci = n => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(6));