const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]

// 1
const result = colaboradores.map(colaborador => {
    return colaborador.name;
})

console.log(result);

// 2
const result = colaboradores.map(colaborador => {
    if (colaborador.cargo === 'front-end') {
        console.log(colaborador);
    }
})

// 3
const result = colaboradores.find(colaborador => {
    return colaborador.idade > 23;
})

console.log(result);

// 4
const result = colaboradores.every(function (colaborador) {
    return colaborador.idade > 18;
})

console.log(result);

// 5
const result = colaboradores.some(colaborador => {
    return colaborador.cargo === 'estagiario';
})

console.log(result);