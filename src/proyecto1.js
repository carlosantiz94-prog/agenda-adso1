// const nombre = "Paola";
// const notas = [3.9, 4.0, 4.5, 4.2];
// const promedio = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// console.log(`Estudiante: ${nombre}`);
// console.log(`Promedio de notas: ${promedio.toFixed(2)}`);
// console.log('estado:', promedio >= 3.5 ? 'Aprobado' : 'Reprobado');

// const edad = 18;
// const mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
// console.log(mensaje); 'menor de edad'

// const aprendiz = {
// nombre: "carlos",
// ficha: 3169901,
// programa: "ADSO"
// };
// console.log(aprendiz.nombre); // carlos
// console.log(aprendiz["ficha"]); // 3169901
// console.log(aprendiz.programa); // ADSO

// const profesor = {
// nombre: "Paola santis",
// edad: 18,
// programa: "ADSO",
// notas: [3.9, 4.0, 4.5, 4.2]
// };

// console.log(profesor.nombre); // Paola
// console.log(profesor.edad); // 18
// console.log(profesor.programa); // ADSO
// console.log(profesor.notas); // [3.9, 4.0, 4.5, 4.2]

// profesor.notas.push(4.5);

// modificaciones

// aprendiz.edad = 22;
// aprendiz.programa = "Desarrollo Web";
// console.log(aprendiz);
// // { nombre: "Gustavo", ficha: 3223874,
// // programa: "Desarrollo Web", edad: 22 }

// EJEMPLO CON METODO

// const aprendiz = {
// nombre: "santis",
// ficha: 3169901,
// saludar: function() {
//     console.log(`Hola, mi nombre es ${this.nombre} y mi ficha es ${this.ficha}`);
//     },
// mostrarinfo: function() {
// console.log(`ficha: ${this.ficha}`);
// },
// };
// aprendiz.saludar(); // Hola, mi nombre es Carlos y mi ficha es 3169901
// aprendiz.mostrarinfo(); // ficha: 3169901

// sintaxis moderno

// const aprendiz = {
// nombre: "Carolina",
// saludar() {
// console.log(`Hola, soy ${this.nombre}`);
// }
// };

// aprendiz.saludar();
// // Hola, soy Carolina

