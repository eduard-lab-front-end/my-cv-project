import './defaultStyles/style.scss';
import './app.scss';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {


  return (
    <div className="App">
        <div className="navBar-container">
          <NavBar/>
        </div>
        <div className='main-container'>
          <Home/>
          <About/>
          <Services/>
          <Portfolio/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
