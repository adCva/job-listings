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
        <Card featured={true} image="photosnap.svg" new={true} companyName="Photosnap" jobPosition="Senior Frontend Developer" posted="1" jobType="Full Time" jobLocation="USA only" tags={["Frontend", "Senior", "HTML", "CSS", "JavaScript"]}/>
        <Card featured={false} image="myhome.svg" new={false} companyName="MyHome" jobPosition="Junior Frontend Developer" posted="5" jobType="Contract" jobLocation="USA only" tags={["Frontend", "Junior", "CSS", "JavaScript"]}/>
      </main>
    </div>
  );
}

export default App;
