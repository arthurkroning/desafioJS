
//DESAFIO 1
console.log("espaço ---------------------------------------");

const subtrai = function (a , b) {
    return a - b;
}

let resultado = subtrai (10 , 8);
console.log(resultado);

//DESAFIO 2
console.log("espaço ---------------------------------------");

const testaZero = (a) => {
   if (a == 0)
   {
      return console.log("zero");
   }
   else {
       return console.log("nao é zero");
       }
}

testaZero(1);
testaZero(0);

// DESAFIO 3

console.log("espaço ---------------------------------------");

function testeSinal (a , b) {

    let total = subtrai (a ,b );

    if ( total == 0)
        {
            return console.log("zero");
        }
        
    else
        {
            {
                if (a >= 0 && b >= 0 || a < 0 && b < 0)
                    {
                    return console.log("sinais iguais");
                    }
                else
                    {
                    return console.log("sinais diferentes");
                    }
                }
        }


    }

testeSinal(1, 1);
testeSinal(1, -2);
testeSinal(2, 1);
