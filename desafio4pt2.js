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

// 1.a

const result = colaboradores.reduce((acc, colaborador) => { return acc + colaborador.idade;}, 0);

console.log(result);

// 1.b

const result = colaboradores.reduce(
    (acc, colaborador) =>
        Object.assign(acc, {
            [colaborador.cargo]: acc[colaborador.cargo]
                ? acc[colaborador.cargo] + 1
                : 1,
        }),
    {}
);
console.log(result);

// 2.a

const result = colaboradores.sort((a, b) => {
    if (a.idade < b.idade) 
    {
        return -1
    }

    if (a.idade > b.idade) 
    {
        return 1;
    }

    return 0;

})

console.log(result);

// 2.b

const result = colaboradores.sort((a, b) => {
    if (a.idade < b.idade) 
    {
        return 1;
    }

    if (a.idade > b.idade) 
    {
        return -1;
    }

    return 0;

})

console.log(result);

// 2.c

const ordemCargos = 
    {
    estagiario: 1,
    'front-end': 2,
    'back-end': 3,
    designer: 4
    }

const arrayCargo = colaboradores.slice().sort((a, b) => {return ordemCargos[a.cargo] - ordemCargos[b.cargo]})

console.log(arrayCargo);

// 2.d

const ordemCargos = 
    {
    estagiario: 1,
    'front-end': 2,
    'back-end': 3,
    designer: 4
    }

const arrayIdadeECargo = colaboradores.slice().sort((a, b) => {
    return a.idade - b.idade || ordemCargos[a.cargo] - ordemCargos[b.cargo]
})

console.log(arrayIdadeECargo);