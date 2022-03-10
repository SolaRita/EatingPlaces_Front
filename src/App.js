import '../src/styles/App.css';
import Navbar from './components/navbar/Navbar.jsx';
import ListPlaces from './components/listPlaces/ListPlaces';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ListPlaces/>
    </div>
  );
}

export default App;
