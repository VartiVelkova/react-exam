import {Routes, Route} from 'react-router-dom';
import Create from './components/Create/Create.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from './contexts/AuthContext.js';
import { NotificationProvider } from './contexts/NotificationContext.js';

function App() {
  return (  
    <AuthProvider>
      <NotificationProvider>      
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
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
