const aprendiz = {
    nombre: "Carlos Santis",
    ficha: 3169901,
    notas: [3.9, 4, 4.5, 3]
};

console.log(`Nombre: ${aprendiz.nombre}`);
console.log(`Ficha: ${aprendiz.ficha}`);
console.log(`Notas: ${aprendiz.notas.join(", ")}`);

const promedio = aprendiz.notas.reduce((acum, nota) => acum + nota, 0) / aprendiz.notas.length;
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log('Estado:', promedio >= 3.5 ? 'Aprobado' : 'Reprobado');

    
// const aprendiz = {
//     nombre: "Carlos Santis",
//     ficha: 3169901,
//     notas: [3.9, 4, 4.5, 3]
// };

// aprendiz.promedio = aprendiz.notas.reduce((acum, nota) => acum + nota, 0) / aprendiz.notas.length;
// aprendiz.estado = aprendiz.promedio >= 3.5 ? 'Aprobado' : 'Reprobado';

// console.log(El aprendiz ${aprendiz.nombre} con ficha ${aprendiz.ficha} tiene las siguientes notas: ${aprendiz.notas} y un promedio de ${aprendiz.promedio.toFixed(2)}. Estado: ${aprendiz.estado}.);