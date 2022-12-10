//********* BIND ***************//
// bind indica quién es this en la fucion logNombre, y guarda una copia de la función, en este caso lo guarda en la variable logNombrePersona
// this = persona
var persona = {
    nombre: 'Kevin',
    apellido: 'Gutierrez'
}

var logNombre = function() {
    console.log(this.nombre)
}

var logNombrePersona = logNombre.bind(persona)
logNombrePersona()

//********* CALL ***************//
// Call solo ejecuta la función pasando como argumento "quién es this"
var persona = {
    nombre: 'Kevin',
    apellido: 'Gutierrez'
}

var logNombre = function() {
    console.log(this.nombre)
}

logNombre.call(persona)

//********* APPLY ***************//
// Ejecuta la función y pasa los parámetros de la función que lleva dentro en corchetes. Prácticamente es lo mismo que Call con la única difirencia de que pasa los parámetros como un array .
var persona = {
    nombre: 'Kevin',
    apellido: 'Gutierrez'
}

var logNombre = function(edad, estadoCivil) {
    console.log(this.nombre, edad, estadoCivil)
}

logNombre.apply(persona, [29, 'casado'])
