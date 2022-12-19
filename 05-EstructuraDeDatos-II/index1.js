//*********** REPASO DE CLASES ************************//
function Perro(){
    this.raza = null
    this.edad = null
}

Perro.prototype.ladrar = function () {
    console.log('guauf guauf')
}

const chuto = new Perro()
chuto.ladrar()



//************** LISTAS ENLAZADAS *************************//
// PARTE 1

// function Node(value) {
//     this.value = value
//     this.next = null
// }

// function LinkedList() {
//     this.head = null
// }


// const miNodo = new Node(5)
// const miOtroNodo = new Node(10)

// miNodo.next = miOtroNodo

// console.log(miNodo)

// const miLista = new LinkedList()
// console.log(miLista)

// miLista.head = miNodo
// console.log(miLista) 

// PARTE 2

function Node(value) {
    this.value = value
    this.next = null
}

function LinkedList() {
    this.head = null
}

LinkedList.prototype.add = function(value) {
    // creamos el nodo nuevo
    const newNode = new Node(value)
    let current = this.head

    // checkeo si tengo algo en head, sino agrego el nodo
    if (current === null) {
        this.head = newNode
        console.log(value)
        return value
    }

    while (current.next !== null) {
        current = current.next
    }

    current.next = newNode

    return value
}

const miListaDemo = new LinkedList()
console.log(miListaDemo);

miListaDemo.add(5)
miListaDemo.add(10)
console.log(miListaDemo);
miListaDemo.add(15)
console.log(miListaDemo);