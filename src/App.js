import logo from './logo.svg';
import './App.css';
import SeasonWinsScrollama from './components/season-wins.js';
import SuccessionWins from './components/SuccessionWins';
import SuccessionLosses from './components/Losses';
import SeasonsHistogram from './components/SeasonsHistogram';


function App() {
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
      </header>
      <SeasonWinsScrollama/>
      <SuccessionWins/>
      <SuccessionLosses/>
      <SeasonsHistogram/>
    </div>
  );
}

export default App;
