import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

const Home = () => {
  const history = useHistory();

  const handleNavigation = () => {
    history.push("/sobre");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleNavigation}>Sobre</button>
      </header>
    </div>
  );
};

export default Home;
