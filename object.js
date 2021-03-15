const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
}

// exercicio 1
console.log(user.nome);
console.log(user.endereco.rua);
console.log(user.projetos[1]);

// exercicio 2
console.log(user["nome"]);
console.log(user["endereco"]["rua"]);
console.log(user["projetos"][1]);

// exercicio 2.D

let name = user["nome"];
let age = user["idade"];
let address = user["endereco"];
let streetAdd = user["endereco"]["rua"];
let numberAdd = user["endereco"]["numero"];
let project = user["projetos"][0];
let projects = user["projetos"][1];


console.log(numberAdd);