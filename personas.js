class Persona {
    id= ''
    nombre=''
    apellido=''
    nombreCompleto= ''
    edad=''
    direccion=''
    telefono=''
    

    constructor(id,nombre, apellido, edad,direccion,telefono){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.nombreCompleto = this.nombre + ' ' + this.apellido
        this.edad = edad
       this.direccion = direccion
       this.telefono = telefono
    }
}

module.exports = Persona