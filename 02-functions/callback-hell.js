

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
    {
        id: 3,
        salario: 2000,
    },
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => {
        return e.id === id
    })

    // if (empleado) {
    //     return empleado
    // } else {
    //     return 'Empleado no existe!!'
    // }

    if (empleado) {
        callback(null, empleado);
    } else {
        callback('Empleado no existe');
    }

}

const getSalarios = (id, callback) => {
    const salario = salarios.find((e) => {
        return e.id === id
    })

    salario ? callback(null, salario) : callback(`No existe el salario con el id ${id}`)
}

// console.log(getEmpleado(1));
getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log('ERROR!!');
        return console.log(err);
    }
    // console.log('Empleado Existe!!');
    // console.log(empleado);

    getSalarios(1, (err, salario) => {
        if (err) {
            console.log('ERROR!!');
            return console.log(err);
        } else {
            console.log('SI EXISTE!!');
            console.log('El empleado: ' + empleado.nombre + ' gana ' + salario.salario + ' pesito');
        }
    })
})

