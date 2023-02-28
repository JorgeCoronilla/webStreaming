import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChangePass } from '../pages/changePass'
import { Error404 } from '../pages/error404'
import { Register } from '../pages/register'
import { StreamingPage } from '../pages/streamingPage'
import { Welcome } from '../pages/welcome'

export const AppRoutes = () => {
    return (
        <div>
            <Routes>

                {/*Inicio y registro*/}
                <Route path="/" element={<Welcome />} />
                <Route path="/registro/:token" element={<Register />} />
                <Route path="/change-pass/:token" element={<ChangePass />} />

                {/*Streaming*/}
                <Route path="/live" element={<StreamingPage />} />

                {/*Error 404*/}
                <Route path="*" element={<Error404 />} />

            </Routes>
        </div>
    )
}
