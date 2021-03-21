// Parte 1

const exercicio1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve("Resolve"); }, 1000);
    })
  }
  
  const exercicio2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve("Resolve2"); }, 2000);
    })
  }
  
  const exercicio3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { reject("Rejeita"); }, 3000);
    })
  }
  

// Parte 2 e 3
 
  async function results() {
    try {
      const res = await Promise.all([exercicio1(), exercicio2(), exercicio3()]);
      console.log(res);
    } 
    catch (error) { console.log(error);} 

    finally { console.log("Final da execução"); }
  }
  
  results();