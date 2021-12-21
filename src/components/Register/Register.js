import { useNavigate } from "react-router-dom";


import * as AuthService from '../../services/authService.js';
import { useAuthContext } from "../../contexts/AuthContext.js";
import { useState } from "react";
import { Alert } from "react-bootstrap";



const Register = () => {   
    const [err, setErrors] = useState({name: false});

    const nameChangeHandler = (e) => {
        let currentInput = e.target.value;
        
        if(currentInput.length < 6){
            setErrors(state => ({...state, name: 'Your password should be at least 6 characters'}))

        } else if(currentInput.length > 15){
            setErrors(state => ({...state, name: 'Your password should be max 15 characters'}))
        } else {
            setErrors(state => ({...state, name: false}))
        }
    }
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

            navigate('/home')
        })

    }

    return (
<section id="register-page" className="content auth">
    <form id="register" method="POST" onSubmit={registerSubmitHandler}>
        
            
            <h1>Register</h1>

            <label htmlFor="email">Email:</label>            
            <input type="email" id="email" name="email" placeholder="maria@email.com" />
            
            
            

            <label htmlFor="password">Password:</label>
            <span className="input" style={{borderColor: err.name ? 'red' : 'inherit'}}>
            <input type="password" name="password" onChange={nameChangeHandler} id="register-password" />
            </span>
            <Alert variant="danger" show={err.name}>{err.name}</Alert>
            

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