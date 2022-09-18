import React, { useState } from "react";
import { useGlobalState } from "../../..";
import { useForm } from "react-hook-form";
import axios from "axios";

const url = "http://localhost:8080/beitraege"

function UploadBeitragComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(useGlobalState("isLoggedIn")[0]);
    const [author, setAuthor] = useState(useGlobalState("username")[0]);
    const [jwtToken, setJwtToken] = useState(useGlobalState("jwtToken")[0]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [uploadSuccessful, setUploadSuccessful] = useState(undefined);

    if (!isLoggedIn) {
        return (
            <div>Bitte einloggen!</div>
        )
    }

    const onSubmit = data => {
        let body = {
            title: data.title,
            author: author,
            content: data.content
        }

        axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + jwtToken
            }
        }).then(resp => {
            setUploadSuccessful(true);
        }).catch(err => {
            setUploadSuccessful(false);
        });
    }

    let content;

    switch (uploadSuccessful) {
        case true:
            content =
                <div>Erfolgreich</div>
            break;
        case false:
            content =
                <div>Nicht erfolgreich</div>
            break;
        case undefined:
            content =
                <div className="flex items-stretch items-center justify-center min-h-screen bg-gray-100">
                    <div className="flex flex-col w-4/5 px-8 py-10 mt-4 text-left bg-white shadow-lg">
                        <h3 className="text-2xl basis-1/8 font-bold text-center">Neuen Beitrag verfassen</h3>
                        <form className="flex flex-col basis-6/8 grow" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col mt-4 basis-6/8 grow">
                                <div className="basis-1/8">
                                    <label className="block">Titel</label>
                                    <input
                                        type="text"
                                        name="title"
                                        {...register('title', { required: true })}
                                        placeholder="Titel"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    />
                                    {errors.username?.type === 'required' && "Pflichtfeld"}
                                </div>
                                <div className="flex flex-col grow">
                                    <label className="block">Inhalt</label>
                                    <textarea
                                        name="content"
                                        {...register('content', { required: true })}
                                        placeholder="Inhalt"
                                        className="grow w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    />
                                    {errors.username?.type === 'required' && "Pflichtfeld"}
                                </div>
                            </div>
                            <div className="basis-1/8">
                                <input type="submit" value="Hochladen" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"></input>
                            </div>
                        </form>
                    </div>
                </div>
            break;
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default UploadBeitragComponent;