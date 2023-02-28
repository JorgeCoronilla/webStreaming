

import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { defaultFetch } from '../helpers/defaultFetch';


export const Login = ({setDisplay}) => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [recover, setRecover] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState(false);
    
    const recoverPass = () => { setDisplay('recoverPass'); }


    //Login
    const sendLogin = async e => {
        e.preventDefault();

        var user = {
            email: e.target.email.value,
            pass: e.target.pass.value
        };
        await defaultFetch("http://localhost:3001/login", "POST", user).then((res) => {
            console.log(res)
            if (res.validation) {
                localStorage.setItem("user", JSON.stringify(res.user));
                console.log(res)
                cookies.set('session', res.token, { path: '/' });
                navigate("/live");
            } else {
                setMessage("Contraseña o email incorrecto/s")
                setShowAlert(true)

                setTimeout(() => {
                    setShowAlert(false);
                }, 3000)
            }
        });
    }
    return (
        <div>
            <form onSubmit={sendLogin}>
                <div><h5>Login</h5></div>
                <div><input type="email" name='email' placeholder='Correo electrónico' required minLength="5" maxLength="40"></input>
                </div>
                <div> <input type="password" name='pass' required placeholder='Contraseña' minLength="4" maxLength="12"></input></div>
                <div><button type="submit">Log in</button></div>
            </form>
            <p onClick={recoverPass}>¿Olvidaste tu contraseña? Recupérala aquí.</p>
        </div>
    )
}
