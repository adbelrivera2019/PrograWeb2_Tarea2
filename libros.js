class Libros {
    id_libro= ''
    nombre_libro=''
    autor=''
    fecha_lanzamiento=''
    

    constructor(id_libro,nombre_libro, autor, fecha_lanzamiento){
        this.id_libro = id_libro
        this.nombre_libro = nombre_libro
        this.autor = autor
        this.fecha_lanzamiento = fecha_lanzamiento
    }
}

module.exports = Libros