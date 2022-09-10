import './App.css';
import Home from './components/HomePage/HomePage'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
         <FontAwesomeIcon icon={('coffee')} />
      <Home/>
      <Footer/>
      
    </div>
  );
}

export default App;
