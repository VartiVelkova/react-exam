import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.js';
import { useNotificationContext, types } from '../../contexts/NotificationContext.js';
import * as AuthService from '../../services/authService.js';

const Login = () => {
    const {login} = useAuthContext();
    const {addNotification} = useNotificationContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let {email, password} = Object.fromEntries(new FormData(e.currentTarget));
        AuthService.login(email, password)
        .then((authData) => {
            login(authData);
            addNotification('You logged in successfuly', types.success);
            navigate('/home')
        })
        .catch((err) => console.log(err))
    }

    return (
<section id="login-page" className="auth">
    <form id="login" method='POST' onSubmit={onLoginHandler}>        
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com" />
        <label htmlFor="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input type="submit" className="btn submit" value="Login" />
        <p className="field">
        <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    
    </form>
</section>        
    );
};

export default Login;