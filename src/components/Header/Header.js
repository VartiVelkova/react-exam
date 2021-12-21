import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.js';

const Header = () => {
    const {user} = useAuthContext();
    
    let guest = (
        <div id="guest">
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link>
       </div>
    );

    let userNav = (
        <div id="user">
            <h4>Hello {user.email}</h4>
           <Link to="/create">Create</Link>
           <Link to="/logout">Logout</Link>
       </div>
    );
    return (
<header>   
   <h1><Link className="home" to="/home">GoFishing</Link></h1>
   <nav>
    <Link to="/my-fish">Everything about myfishing</Link>
       { user.email
       ? userNav
       : guest
       }       
   </nav>
</header>
    );
};

export default Header;