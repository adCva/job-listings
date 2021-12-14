import Card from './Components/Card';
import Filter from './Components/Filter';
import './Reset.css';
import './Scss/style.css';

function App() {
  return (
    <div className="App">
      <header>
        <Filter />
      </header>
      <main>
        <Card />
      </main>
    </div>
  );
}

export default App;
