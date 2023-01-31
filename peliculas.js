class Peliculas {
    id_pelicula= ''
    nombre_pelicula=''
    director=''
    fecha_estreno=''
    

    constructor(id_pelicula,nombre_pelicula, director, fecha_estreno){
        this.id_pelicula = id_pelicula
        this.nombre_pelicula = nombre_pelicula
        this.director = director
       this.fecha_estreno = fecha_estreno
    }
}

module.exports = Peliculas