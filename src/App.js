import logo from './exxonLogo.png';
import { Container } from './styles';

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Live Share Demo
        </p>
        <a
          className="App-link"
          href="httpss.microsoft.com/en-us/visualstudio/liveshare/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </Container>
  );
}

export default App;