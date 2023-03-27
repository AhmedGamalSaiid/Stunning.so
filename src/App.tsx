import './App.css';
import Customiz from './Pages/Customiz';
import HeroProvider from './Contexts/HeroData';

function App() {
  return (
    <HeroProvider>
      <div className="App">
        <Customiz />
      </div>
    </HeroProvider>
  );
}

export default App;
