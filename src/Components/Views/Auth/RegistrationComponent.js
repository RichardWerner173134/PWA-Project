import React from "react";
import { useForm } from "react-hook-form";
import { setGlobalState } from "../../..";
import axios from "axios";
import { useFilePicker } from 'use-file-picker';

const url = "http://localhost:8080/register";

function RegistrationComponent() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [openFileSelector, { filesContent, plainFiles }] = useFilePicker({
        multiple: false,
        readAs: "DataURL",
        accept: [".jpg"]
    });

    const onSubmit = data => {
        const body = {
            username: data.username,
            password: data.password
        }

        axios.post(url, body)
            .then(resp => {
                setGlobalState("isLoggedIn", true);
                setGlobalState("jwtToken", resp.data);
            }).catch(error => {
                alert("Login fehlgeschlagen. Benutzername oder Passwort Falsch\n" + error)
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Registriere dich</h3>
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
                        <div>
                            <label className="block">Vorname</label>
                            <input
                                type="text"
                                name="vorname"
                                {...register('vorname', { required: false })}
                                placeholder="Vorname"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label className="block">Nachname</label>
                            <input
                                type="text"
                                name="nachname"
                                {...register('nachname', { required: false })}
                                placeholder="Nachname"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
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
                        <div className="mt-4">
                            <label className="block">Passwort wiederholen</label>
                            <input
                                type="password"
                                placeholder="Passwort wiederholen"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                            {errors.password?.type === 'required' && "Pflichtfeld"}

                        </div>
                        <div className="mt-4">
                            <button className="btn btn-block btn-outline" onClick={() => openFileSelector()}>Profilbild auswählen</button>
                            {!!filesContent.length && <img className="rounded pt-2 pb-2" src={filesContent[0].content} width="300" height="200" />}
                            <br />
                            {plainFiles.map((file) => (
                                <div key={file.name}>{file.name}</div>
                            ))}
                        </div>
                        <div className="flex items-baseline justify-between">
                            <input type="submit" value="Registrieren" className="btn btn-block btn-primary px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationComponent;