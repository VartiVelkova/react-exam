import {Routes, Route} from 'react-router-dom';
import ErrorBoudary from './components/Common/ErrorBoundary.js';
import GuardedRoute from './components/Common/GuardedRoute.js';
import Notification from './components/Common/Notification.js';
import Create from './components/Create/Create.js';
import Details from './components/Details/Details.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout.js';
import Register from './components/Register/Register';
import { AuthProvider } from './contexts/AuthContext.js';
import { NotificationProvider } from './contexts/NotificationContext.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './components/Edit/Edit.js';
import MyFish from './components/MyFish/MyFish.js';


function App() {
  return (  
    <ErrorBoudary>
    <AuthProvider>
      <NotificationProvider>      
        <div id="box">
         <Header />
          <Notification />
          <main>
            <Routes> 
            <Route path='/' element={<Home />} />       
              <Route path='/home/*' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />              
              <Route path='/details/:fishId' element={<Details />} />
              
              <Route element={<GuardedRoute />}>
              <Route path='/create' element={<Create />} />
              <Route path='/edit/:fishId' element={<Edit />} />
              <Route path='/my-fish' element={<MyFish />} />
              </Route>

            </Routes>
          </main>
                <Footer />
          </div>
      </NotificationProvider>
    </AuthProvider>
    </ErrorBoudary>
  );
}

export default App;
