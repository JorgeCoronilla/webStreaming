import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { defaultFetch } from '../helpers/defaultFetch';

export const Register = () => {
  const [email, setEmail] = useState("gofthet@gmail.com");
  const { token } = useParams();
  const navigate = useNavigate()

   // Comprueba si el token de la url es válido
   useEffect(() => {
    defaultFetch("http://localhost:3001/check-email", "POST", { token: token })
        .then((res) => {
            if (res.mensaje) {
                setEmail(res.email);
                console.log(res);
            } else {
                //setMessage("El enlace es incorrecto o ha expirado")
                //setShowAlert(true)
                setTimeout(() => {
                    //setShowAlert(false);
                }, 3000)

            }
        })
}, [])

//Inserta el nuevo usuario
const insertUser = async e => {

  e.preventDefault();
  if (e.target.pass.value === e.target.confirmPass.value) {
      console.log(email);
      var newUser = {
          jwt: token,
          name_: e.target.name_.value,
          email: email,
          pass: e.target.pass.value,
          role: ""
      }

      const res = await defaultFetch("http://localhost:3001/register", "POST", newUser)
      if (res.mensaje) {
          //setMessage("Registro completado con éxito")
          //setShowAlert(true)
          navigate('/');
          setTimeout(() => {
              //setShowAlert(false);
              //setDisplay("profile")
          }, 2000)

      } else {
          //setMessage("Ha habido un error, inténtelo de nuevo")
          //setShowAlert(true)
          setTimeout(() => {
              //setShowAlert(false);
          }, 2000)
      }

  } else {
      //setMessage("Las contraseñas no coinciden")
      //setShowAlert(true)
      setTimeout(() => {
          //setShowAlert(false);
      }, 3000)
  }
}
  return (
    <div>

<div className='register-container'>
           
                     
            <div className='regContainer'>
                <form onSubmit={insertUser}>
                    <div className='inputContainer'>
                        <label><sup>*</sup>Nombre</label>
                        <input type="text" name='name_' required minLength="5" maxLength="50" />
                    </div>
                    <div className='inputContainer'>
                        <label><sup>*</sup>Contraseña</label>
                        <input type="password" name="pass" required minLength="4" maxLength="12" />
                    </div>
                    <div className='inputContainer'>
                        <label><sup>*</sup>Confirmar contraseña</label>
                        <input type="password" name="confirmPass" required minLength="4" maxLength="12" />
                    </div>

                    <div className='inputRegister'>
                        <input className='contButton' type="submit" value="Continuar" />
                    </div>
                   
                </form>
            </div>
        </div>
    </div>
  )
}
