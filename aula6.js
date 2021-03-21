// exercicio 1

const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
}

let { nome } = user
console.log(nome);

let { endereco: { rua } } = user
console.log(rua);

let { projetos: [...rest] } = user
console.log(...rest);

let { projetos: [, b] } = user
console.log(b);




// exercicio 2

const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
]

const [a, ,] = students
console.log(a);

const [, , c] = students
console.log(c);

const [, J: {, name ,},] = students
const { novonome } = J
console.log(novonome);
