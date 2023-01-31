//recibiendo lo que se exporto de los modulos de las clases Persona, Libros, Peliculas
var Persona = require('./personas')
var Libros = require('./libros')
var Peliculas = require('./peliculas')


console.log("**********************************  Personas* **************************************************");
console.log("************************************************************************************************");
console.log(" ");
//instancia de la clase Persona para crear objetos persona 1, 2, 3
const persona1 = new Persona(1,'Leonel', 'Rivera',4,'Col La Rosa', '97776547')
const persona2 = new Persona(2,'Marian', 'Garcia',24,'Col La Travesia', '94430495')
const persona3 = new Persona(3,'Jose', 'Gutierrez',74,'Col Kennedy', '89771210')

//Creacion del arreglo listapersona el cual almacenara todos nuestros objetos persona
let listaPersonas = [];

//Crear personas
console.log("*********  Creando Personas 1, 2, 3  *************");
listaPersonas.push(persona1);
listaPersonas.push(persona2);
listaPersonas.push(persona3);
console.log(listaPersonas);

//Editar personas
console.log("*********  Editando Direccion de Persona con id = 1  *************");
console.log("*********  Editando Edad de Persona con id = 2       *************");
console.log("*********  Editando Telefono de Persona con id = 3   *************");
const ipersona = listaPersonas.find((persona) => persona.id === 1)
ipersona.direccion = 'Col. El Hatillo';
const ipersona2 = listaPersonas.find((persona) => persona.id === 2)
ipersona2.edad = 54;
const ipersona3 = listaPersonas.find((persona) => persona.id === 3)
ipersona3.telefono = '22456098';
console.log(listaPersonas);


//Filtro personas
console.log("*********  Filtrado de Personas con id != 2  *************");
listaPersonas = listaPersonas.filter((persona) => persona.id !== 2)
console.log(listaPersonas)


//Borrar personas
console.log("*********  Borrando Personas 3 *************");
listaPersonas.pop(persona3);

console.log(listaPersonas);

//*********************************************************************************************************** */
//*********************************************************************************************************** */
console.log("**********************************  Peliculas **************************************************");
console.log("************************************************************************************************");
console.log(" ");
//instancia de la clase Peliculas para crear objetos pelicula 1, 2, 3
const pelicula1 = new Peliculas(1,'Titanic', 'Adbel Rivera','2022/10/10')
const pelicula2 = new Peliculas(2,'Troya', 'Homero Segundo','2023/2/16')
const pelicula3 = new Peliculas(3,'Londres Bajo Fuego', 'Sofia Perez','2010/12/12')
const pelicula4 = new Peliculas(4,'Avatar', 'Jose Facundo','2013/10/10')
const pelicula5 = new Peliculas(5,'Superman', 'Ignacio Camarena','2011/2/3')
const pelicula6 = new Peliculas(6,'Batman', 'Martha Wayne','2004/12/22')

//Creacion del arreglo listapeliculas el cual almacenara todos nuestros objetos pelicula
let listaPelicula = [];

//Crear peliculas
console.log("*********  Creando Peliculas 1, 2, 3, 4, 5, 6  *************");
listaPelicula.push(pelicula1);
listaPelicula.push(pelicula2);
listaPelicula.push(pelicula3);
listaPelicula.push(pelicula4);
listaPelicula.push(pelicula5);
listaPelicula.push(pelicula6);
console.log(listaPelicula);

//Editar peliculas
console.log("*********  Editando Director de Pelicula con id = 1  *************");
console.log("*********  Editando Nombre de Pelicula con id = 3    *************");
console.log("*********  Editando Fecha de Pelicula con id = 5     *************");
const ipelicula = listaPelicula.find((pelicula) => pelicula.id_pelicula === 1)
ipelicula.director = 'Pepito Martinez';
const ipelicula2 = listaPelicula.find((pelicula) => pelicula.id_pelicula=== 3)
ipelicula2.nombre_pelicula= 'Dracula';
const ipelicula3 = listaPelicula.find((pelicula) => pelicula.id_pelicula === 5)
ipelicula3.fecha_estreno= '1998/2/23';
console.log(listaPelicula);

//Filtro peliculas
console.log("*********  Filtrado de Peliculas con id != 3  *************");
listaPelicula = listaPelicula.filter((pelicula) => pelicula.id_pelicula !== 3)
console.log(listaPelicula);

//Borrar peliculas
//con el metodo pop se eliminan los ultimos objetos que entraron a la lista no los primeros
console.log("*********  Borrando Peliculas 5, 6  *************");
listaPelicula.pop(pelicula5);
listaPelicula.pop(pelicula6);

console.log(listaPelicula);


//*********************************************************************************************************** */
//*********************************************************************************************************** */
console.log("************************************   Libros  *************************************************");
console.log("************************************************************************************************");
console.log(" ");
//instancia de la clase Libros para crear objetos libros 1, 2, 3, 4, 5
const libro1 = new Libros(1,'El Principito', 'Jack Phillips','2002/10/10')
const libro2 = new Libros(2,'Cien anios de soledad', 'Gabriel Marquez','2000/2/16')
const libro3 = new Libros(3,'El senior de los anillos', 'JR Tolkien','2009/12/12')
const libro4 = new Libros(4,'Crimen y Castigo', 'Fiodor','201410/10')
const libro5 = new Libros(5,'Orgullo y Prejuicio', 'JAne Austen','2019/2/3')

//Creacion del arreglo listapeluclas el cual almacenara todos nuestros objetos pelicula
let listaLibro = [];

//Crear libros
console.log("*********  Creando Libros 1, 2, 3, 4, 5  *************");
listaLibro.push(libro1);
listaLibro.push(libro2);
listaLibro.push(libro3);
listaLibro.push(libro4);
listaLibro.push(libro5);
console.log(listaLibro);

//Editar peliculas
console.log("*********  Editando Autor de Libro con id = 1  *************");
console.log("*********  Editando Nombre de Libro con id = 2    *************");
console.log("*********  Editando Fecha de Libro con id = 4     *************");
const ilibro = listaLibro.find((libro) => libro.id_libro === 1)
ilibro.autor = ' Aldouxs';
const ilibro2 = listaLibro.find((libro) => libro.id_libro=== 2)
ilibro2.nombre_libro= '1984 de George';
const ilibro3 = listaLibro.find((libro) => libro.id_libro === 4)
ilibro3.fecha_lanzamiento= '1970/12/2';
console.log(listaLibro);

//Filtro libros
console.log("*********  Filtrado de Libros con id != 3  *************");
listaLibro = listaLibro.filter((libro) => libro.id_libro !== 3)
console.log(listaLibro);

//Borrar libros
//con el metodo pop se eliminan los ultimos objetos que entraron a la lista no los primeros
console.log("*********  Borrando Libro con id = 5  *************");
listaLibro.pop(libro5);
console.log(listaLibro);