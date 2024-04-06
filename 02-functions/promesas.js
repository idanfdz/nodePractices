
const empleados = [

    {
        id: 1,
        nombre: 'Victor'
    },
    {
        id: 2,
        nombre: 'Daniel'
    },
    {
        id: 3,
        nombre: 'iDan'
    },
];

const salarios = [

    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];

// const getEmpleado = (id, callback) => {
//     const empleado = empleados.find((e) => e.id === id)?.nombre

//     const promesa = new Promise((resolve, reject) => {
//         if (empleado) {
//             resolve(empleado);
//         } else {
//             reject(`No existe el empleado con id ${id}`)
//         }
//     })
//     return promesa
// }

const getEmpleado = (id) => {

    const empleado = empleados.find((e) => e.id === id)?.nombre;

    return new Promise((resolve, reject) => {

        empleado
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`)

    })
}

const getSalario = (id) => {

    const salario = salarios.find((s) => s.id === id)?.salario;

    return new Promise((resolve, reject) => {

        salario
            ? resolve(salario)
            : reject('No tiene salario')
    })
}


// getEmpleado(1)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err))

// getSalario(1)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))

const id = 3;

// getEmpleado(id)
//     .then(empleado => {

//         getSalario(1)
//             .then(salario => console.log('El Empleado: ' + empleado + ' gana: ' + salario + ' pesito'))
//             .catch(err => console.log(err))

//     })
//     .catch(err => console.log(err))


//  PROMESAS EN CADENA

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log('El empleado: ', nombre, ' gana ', salario, ' pesito'))
    .catch(err => console.log(err))