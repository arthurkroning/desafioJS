import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button.js'

function App() {

  const [frase, setFrase] = useState("Salve");
  const [conteudo, setMudanca] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          DIA DE LOBO! <br/>
          
        </p>

        <a>
        { frase }

        <Button text="botao" handleClick={() => {
          setFrase("mudou");
          console.log("texto do anchor mudou!");
        }} />

        <Button text="Clique aqui 2" handleClick={() => {
          setMudanca(true)
        }} />
        {conteudo ? <h1>Título</h1> : ""}

        </a>
      </header>
    </div>
  );
}

export default App;
