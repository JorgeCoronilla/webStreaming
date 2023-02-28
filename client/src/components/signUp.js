import React from 'react'
import { defaultFetch } from '../helpers/defaultFetch';

export const SignUp = ({setDisplay}) => {

    const recoverPass = () => { 
        setDisplay('login'); 
    }

    const sigInSub = async e => {
        e.preventDefault();
        var userEmail = { email: e.target.email.value };
        setDisplay('welcome')

        
        //Envía correo de confirmación
        const res = await defaultFetch("http://localhost:3001/sign-up", "POST", userEmail);

        if (res) {
            console.log(res)
            //setMessage("Correo enviado correctamente")
            //setShowAlert(true)

            setTimeout(() => {
                //setShowAlert(false);
                //navigate("/")
            }, 3000)

        } else {
            //setMessage("Perdona, algo ha salido mal, vuelve a intentarlo")
            //setShowAlert(true)

            setTimeout(() => {
                //setShowAlert(false);
            }, 3000)
        }
    }

  return (
    <div>
        <form onSubmit={sigInSub}>
                        <h5>Regístrate para obtener tu cuenta</h5>
                        <p>A continuación confirme su correo electrónico para finalizar el registro.</p>
                        <input type="email" placeholder="email" required name="email" minLength="5" maxLength="40"></input>
                        <div>
                            <input type="checkbox" className='checkbox' name="newsletter" />
                            <p className='checkbox'>Sí, deseo recibir noticias y ofertas de ApuShop acerca de productos, eventos, etc.</p></div>
                        <br />
                        <button type='submit'>Registrarse</button>
                    </form>
                    <p onClick={recoverPass}>¿Ya tiene una cuenta? Iniciar sesión</p>
    </div>
  )
}
