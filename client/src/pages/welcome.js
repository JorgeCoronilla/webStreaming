import React, { useState, useEffect } from 'react'
import { Login } from '../components/login'
import { SignUp } from '../components/signUp'
import { RecoverPass } from '../components/recoverPass'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { defaultFetch } from '../helpers/defaultFetch';


export const Welcome = () => {
    const cookies = new Cookies();
    const [display, setDisplay] = useState("welcome");
    const navigate = useNavigate();


    useEffect(()=> {
        var session = cookies.get("session");
        if(!session) { navigate('/')};

       defaultFetch(`http://localhost:3001/get_current_user`, "post",
       { token: session })
       .then((res) => {
            if (res.mensaje==="token error") { navigate('/')} else {
                navigate('/live')
            }
       })
    },[])

    return (
        <div>
            {display === "welcome" &&
                <div>
                    <h2>Bienvenido</h2>
                    <button onClick={() => setDisplay('login')}>Login</button>
                    <button onClick={() => setDisplay('signUp')}>Sign Up</button>
                </div>
            }

            {display === "login" &&
                <Login setDisplay={setDisplay} />
            }

            {display === "signUp" &&
                <SignUp setDisplay={setDisplay} />
            }

            {display === "recoverPass" &&
                <RecoverPass setDisplay={setDisplay} />
            }


        </div>
    )
}
