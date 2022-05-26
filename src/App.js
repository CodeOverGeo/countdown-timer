import './App.css';
import CoundownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
      <CoundownTimer countdownTimestamp={1671926400000} />
    </div>
  );
}

export default App;
