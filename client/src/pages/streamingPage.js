import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { defaultFetch } from '../helpers/defaultFetch';

export const StreamingPage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    var session = cookies.get("session");
    if (!session) { navigate('/') };

    defaultFetch(`http://localhost:3001/get_current_user`, "post",
      { token: session })
      .then((res) => {
        if (res.mensaje === "token error") { navigate('/') } 
      })
  }, [])

  return (
    <div>Streaming aquí</div>
  )
}
