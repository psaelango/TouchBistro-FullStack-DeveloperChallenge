import PrimeNosContainer from './containers/PrimeNosContainer';
import TitleBar from './components/TitleBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <div className="App-pages">
        <PrimeNosContainer />
      </div>
    </div>
  );
}

export default App;
