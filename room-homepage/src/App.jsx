import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route } from 'react-router-dom';
import './App.css';
//import Navbar from './components/navbar/Navbar';
import Home from './page/home/Home';
//import Layout from './layout/Layout';


library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
