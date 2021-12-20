import { useNavigate } from "react-router-dom";

import * as AuthService from '../../services/authService.js';
import { useAuthContext } from "../../contexts/AuthContext.js";


const Register = () => {
    const navigate = useNavigate();

    const { login } = useAuthContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let {email, password, rePassword} = Object.fromEntries(new FormData(e.currentTarget));
        if(password !== rePassword){
            return Error('pass or repass are incorect')
        }
        AuthService.register(email, password)
        .then(authData => {
            login(authData);

            navigate('/')
        })

    }

    return (
<section id="register-page" className="content auth">
    <form id="register" method="POST" onSubmit={registerSubmitHandler}>
        
            
            <h1>Register</h1>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com" />

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="register-password" />

            <label htmlFor="con-pass">Confirm Password:</label>
            <input type="password" name="rePassword" id="rePassword" />

            <input className="btn submit" type="submit" value="Register" />

            <p className="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        
    </form>
</section>        
    );
};

export default Register;