import './assets/styles/App.css';
import Header from './components/Header';
import dataContext from './utilities/context';
import Continents from './components/Continents';
import data from './utilities/data.json';

function App() {
  return (
    <div className="App">
      <dataContext.Provider value={data}>
        <Header />
        <Continents />
      </dataContext.Provider>
    </div>
  );
}

export default App;
