import './App.css';
//import TitleComponent from './components/catalogo/title/title';
import NavBar from './components/NavBar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <NavBar/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default App;