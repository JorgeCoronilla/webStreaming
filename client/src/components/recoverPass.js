import React from 'react'
import { defaultFetch } from '../helpers/defaultFetch';

export const RecoverPass = ({setDisplay}) => {
    const recover = async e => {
        e.preventDefault();
        var userEmail = { email: e.target.email.value };
        setDisplay('welcome')

        
        const res = await defaultFetch("http://localhost:3001/recover-pass", "POST", userEmail);
        if (res.mensaje) {
          //setMessage("Correo enviado correctamente " + e.target.email.value)
          //setShowAlert(true)
          setTimeout(() => {
            //setShowAlert(false);
            //navigate("/");
            //setRecover(false);
          }, 3000)
        }
        
    }
  return (
    <div>
         <form onSubmit={recover}>
          <h5>Ingresa el email que usaste para registrarte</h5>
          <h6>Te enviaremos un correo con las instrucciones para cambiar tu contraseña</h6>
          <input type="email" required name="email" minLength="4" maxLength="40" ></input>
          <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}
