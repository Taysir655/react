import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavB from './components/NavB';
import Formm from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavB />
    <Home />
    <Formm />
      </header>
    </div>
  );
}

export default App;
