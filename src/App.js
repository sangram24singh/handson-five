import './App.css';
import Click from './HOC/Click';
import Hover from './HOC/Hover';

function App() {
  return (
    <div className="App">
      <h1>Higher Order Functions</h1>
      <Hover/>
      <Click/>
    </div>
  );
}

export default App;
