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