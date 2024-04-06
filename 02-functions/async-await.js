
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
            : reject('El Empleado no tiene salario')
    })
}

const getInfoUsuario = async (id) => {

    try {

        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El Empleado: ${empleado} gana ${salario} pesito`;

    } catch (error) {

        // return error
        // Con el throw se manda al reject!!!!
        throw error

    }

}

const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))

