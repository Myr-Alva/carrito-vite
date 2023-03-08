import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Amigurumi from './components/paginas/Amigurumi'
import Items from './components/paginas/Items'



function App() {


  return (
    <div className="App">
      <Router>
        <switch>
        <Navbar/>
        <Inicio/>
        <Amigurumi
        name="conejo"
        description= "tamaño mediano hecho a mano"
        price= {30}
        />
        <Items/>
        </switch>
      </Router>
</div>
  );
}        
export default App;
