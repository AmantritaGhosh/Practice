import logo from './logo.svg';
import './App.css';
import SelectDate from './components/SelectDate';

function App() {
  return (
    <div className="App">
      <header>
        Vaccine Availability
      </header>
      <div><SelectDate/></div>
    </div>
  );
}

export default App;
