
const { crearArchivo } = require('./helpers/multiplicar')

console.clear()

const base = 5;

// Se pasa al archivo multiplicar.js
// for (let i = 1; i <= 10; i++) {
//     salida += `${base} X ${i} = ${base * i}\n`;
// }
// // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
// //     if (err) throw err;

// // })

// console.log(salida);

// fs.writeFileSync(`tabla-${base}.txt`, salida)

// console.log(`tabla-${base}.txt creado!`);

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
