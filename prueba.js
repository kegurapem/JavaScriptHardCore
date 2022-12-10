const array = [
    {
        "id": 1,
        "name": "Clothes",
        "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=5086"
        },
        {
        "id": 2,
        "name": "Electronics",
        "image": "https://api.lorem.space/image/watch?w=640&h=480&r=271"
        },
        {
        "id": 3,
        "name": "Furniture",
        "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=369"
        },
]

console.log(array[0].category);


const array2 = [
    {
        "id": 1,
        "category": {
            "id": 4,
            "name": "Shoes",
            "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=9227"
        }
    },
    {
        "id": 2,
        "category": {
            "id": 4,
            "name": "Shoes",
            "image": "https://api.lorem.space/image/shoes?w=640&h=480&r=9227"
        }
    },
    {
        "id": 3,
        "category": {
            "id": 3,
            "name": "Furniture",
            "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=8187"
        }
    },
]

console.log(array2[0].id);


//**********RETO HENRY*************//

function counter() {
    var contador = 0
    return function () {
      contador = contador + 1
      return contador
    }
  }

const nuevoContador = counter()
console.log(nuevoContador())
console.log(nuevoContador())



//************************************//
function cacheFunction(cb) {
    var myCache = {}
    return function(arg){
        if (number in myCache === true) {
            return myCache['number']
        } else {

        }
    }
}
const square = function square(n){
    return n * n
  }
const squareCache = cacheFunction(square)

var newObject = {5: 20, 30:120}
// console.log('52' in newObject);

console.log(newObject['5'])

//************************************//

// Bind

var instructor = {
    nombre: 'Franco',
    edad: 25,
 };
 
 var alumno = {
    nombre: 'Juan',
    curso: 'FullStack',
 };
 
 function getNombre() {
   return this.nombre;}
 
 /*
   Ejercicio 3
   IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
   Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
 */
 
 let getNombreInstructor = getNombre.bind(instructor);
 let getNombreAlumno = getNombre.bind(alumno);


 //*****************************//
 /*
 Ejercicio 4
 Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
   return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, '*', '*');
let textoGuiones = crearCadena.bind(null, '-', '-');
let textoUnderscore = crearCadena.bind(null, '_', '_');