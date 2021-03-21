// exercicio 1

const result = (...qualquer) => { console.log(qualquer); }

result(1, 2, 3);

// exercicio 2

const objeto = {
    nome: "arthur",
    idade: 21
}

function exe2({ nome })   
    {
        console.log(nome);
    };

exe2(objeto);

// exercicio 3

const obj1 =   {
    nome: "arthur",
    sobrenome: "kroning"
    }

const obj2 = {
    idade: "21"
}

const Uniao = (a, b) => {
    const obj3 = { ...a, ...b }
    return console.log(obj3);
}

Uniao(obj1, obj2);

// exercicio 4

const array1 = [1, 2, 3];

const array2 = [4, 5, 6];

const arrayComb = (a, b) => {
    const array3 = [...a, ...b];
    return console.log(array3);
};

arrayComb(array1, array2);