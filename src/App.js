import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Publications from './components/Publications';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="white-page-shadow">

        <Education />
        <Publications />

      </div>
    </div>
  );
}

export default App;
