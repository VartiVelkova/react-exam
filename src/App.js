import {Routes, Route} from 'react-router-dom';
import Create from './components/Create/Create.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (    
    <div id="box">
      <Header />
      <main>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<Create />} />
        
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
