import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Waves from './components/wavesbg';
import BackButton from './components/backButton';

function App() {
  return (
    <div>
      <BackButton/>
      <Home/> 
      <Waves/>
    </div>
    
  );
}

export default App;
