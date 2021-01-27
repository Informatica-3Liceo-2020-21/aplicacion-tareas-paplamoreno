let estudiante = {
  nombre: "Luis",
  edad: 17,
  curso: 'terzaliceo',
  notas: [10, 8, 5, 9, 2],
  añadirnota: function(nota) {
    this.notas.push(nota);
  },
  mostrarinformacion: function() {
    console.log(this.nombre, this.edad, this.curso)
  },
  promedio: function(){
    let suma=0;
    for(nota of this.notas)suma+-nota;
    return suma/this.notas.length;
},
}
function estudiante(nombre, edad, curso, notas){{
  this.nombre = nombre;
  this.edad = edad;
  this.curso = curso;
  this.notas = notas;

  (this.añadirnota= function (nota){
    this.notas.push(nota);
});
(this.mostrarpromedio=function(){
    for(notas of this.notas) i+=nota;
         i/this.nota.lenght;
});
(this.mostrarinformacion = function (){console.log(this.nombre,this.edad,this.curso)});
}};

function carros (marca, modelo, año, kilometraje, KPG){
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.kilometraje = kilometraje;
  this.KPG = KPG;
  (this.añadirRecorrido= function (kilometrajes) {
    kilometraje = kilometraje + this.añadirRecorrido;
    console.log (kilometraje);
});
(this.calcularconsumo = function (kpg) {
    let consumo;
    let consumo = kilometros/kKPG;
    console.log(consumo);
});
(this.mostrarrecorrido= function () {
  console.log(this.marca,this.modelo,this.año,this.kilometraje,this.kpg)  
})
}
let estudiante1 = new Estudiantes("Luis", 17, "Terzaliceo", [8, 5, 9, 7, 6]);
let estudiante2 = new Estudiantes("carlitos", 16, "Terzaliceo", [10, 5, 8, 4, 9]);
let estudiante3 = new Estudiantes("Clara", 17, "Terzaliceo", [6, 9, 7, 8, 9]);
let carro1 = new carros("BMW", "528i", 2016, 88000, 33);
let carro2 = new carros("BMW", "420i", 2019, 5000, 35);
let carro3 = new carros("porsche", "cayman GT4", 2019, 2000, 20);


//
// Function.estudiante (nombre, edad, curso, notas)
// this.nombre = nombre;
// this.edad = edad; 
// this.curso = curso;
// this.notas = notas;





// }

// material: "vidrio",
// dueno: "Luis",
// // PROPIEDADES
// // MÉTODOS
// regarAgua: function (cantidad) {
//   this.contenidoActual -= cantidad;
// },
// llenar: function () {
//   this.contenidoActual = this.capacidad;
// },
// };

// // Se puede acceder a las propiedades y los métodos del objeto usando un punto.
// console.log(miVaso.capacidad);
// console.log(miVaso.contenidoActual);
// miVaso.regarAgua(15);
// console.log(miVaso.contenidoActual);
// miVaso.llenar();
// console.log(miVaso.contenidoActual);

// // O se pueden crear usando una FACTORY FUNCTION.
// // La función siguiente se llama FACTORY FUNCTION, y su tarea es crear objetos con
// // las propiedades deseadas. La ventaja que tiene es que se puede utilizar muchas veces para generar muchos objetos de la misma clase.
// function Vaso(color, capacidad, contenidoActual, material, dueno) {