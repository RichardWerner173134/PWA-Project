import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { setGlobalState } from "../../..";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:8080/register";

function RegistrationComponent() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    const navigate = useNavigate();

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
    }

    const onSubmit = data => {
        console.log("onsubmit");
        console.log(data);
        console.log(data.username);
        console.log(data.password);
        console.log(data.vorname);
        console.log(data.nachname);
        let formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        formData.append("vorname", data.vorname);
        formData.append("nachname", data.nachname);
        formData.append("profilbild", selectedFile, selectedFile.name);
        console.log(formData);
        let axiosConfig = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        axios.post(url, formData, axiosConfig)
            .then(resp => {
                console.log("sucessfully registered: " + resp);
                setGlobalState("isLoggedIn", true);
                setGlobalState("jwtToken", resp.data.jwt);
                setGlobalState("username", resp.data.userData.author);
                setGlobalState("vorname", resp.data.userData.vorname);
                setGlobalState("nachname", resp.data.userData.nachname);
                setGlobalState("profilbild", resp.data.userData.profilbild);
                navigate('/');
            }).catch(error => {
                alert("Registrierung fehlgeschlagen.\n" + error)
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
                                {...register('vorname', { required: true })}
                                placeholder="Vorname"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label className="block">Nachname</label>
                            <input
                                type="text"
                                name="nachname"
                                {...register('nachname', { required: true })}
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
                            <label className="block">Profilbild</label>
                            <input
                                type="file"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                id="default_size"
                                onChange={onSelectFile}
                            />
                            <br />
                            {selectedFile && <img src={preview} height="300" width="400" />}
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