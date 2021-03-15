import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from './logo.svg';
import './assets/scss/index.scss';


function App() {
  function handleOpenGithubLink () {
    window.open("https://github.com/baptistemrt/tarot-game.app", "_blank");
  }
  return (
    <div className="App">
      <section>
        <div className="App-logo">
          <img src={logo} alt={"landing logo"} />
        </div>
        <div className="App-title">
          <h1>Du tarot, point.</h1>
          <h3>L'application est en développement...</h3>
        </div>
      </section>
      <div className="github-button">
        <button onClick={handleOpenGithubLink} >GitHub <FontAwesomeIcon icon={faGithub} /></button>
      </div>
    </div>
  );
}

export default App;
