import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { setGlobalState } from "../../..";
import { useNavigate } from 'react-router-dom'; 

const url = "http://localhost:8080/authenticate";

function LoginComponent() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        const body = {
            username: data.username,
            password: data.password
        }

        axios.post(url, body)
            .then(resp => {
                setGlobalState("isLoggedIn", true);
                setGlobalState("jwtToken", resp.data);
                navigate('/');
            }).catch(error => {
                alert("Login fehlgeschlagen. Benutzername oder Passwort Falsch\n" + error)
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Logge dich in deinen Account ein</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <div>
                            <label className="block">Benutzername</label>
                            <input 
                                type="text"
                                name="username" 
                                {...register('username', { required: true })}
                                placeholder="Benutzername"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                            {errors.username?.type === 'required' && "Pflichtfeld"}
                        </div>
                        <div className="mt-4">
                            <label className="block">Passwort</label>
                            <input 
                                type="password" 
                                name="password"
                                {...register('password', { required: true })}
                                placeholder="Passwort"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                            {errors.password?.type === 'required' && "Pflichtfeld"}

                        </div>
                        <div className="flex items-baseline justify-between">
                            <input type="submit" value="Einloggen" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"></input>
                            <div className="text-sm text-blue-600 hover:underline">Passwort vergessen?</div>
                            <div className="text-sm text-blue-600 hover:underline">Registrieren</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>    
    );
}

export default LoginComponent;