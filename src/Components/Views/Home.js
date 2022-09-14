import React from 'react';
import { useGlobalState } from '../..';

function Home(){
    const isLoggenIn = useGlobalState("isLoggedIn")[0];
    const jwtToken = useGlobalState("jwtToken")[0];
    const username = useGlobalState("username")[0];
    const vorname = useGlobalState("vorname")[0];
    const nachname = useGlobalState("nachname")[0];
    const profilbild = useGlobalState("profilbild")[0];


    if (isLoggenIn == false) {
        return (
            <div>
                <h1 className='font-bold text-2xl'>Herzlich willkommen zu der besten Blog-Webseite, die Sie je gesehen haben!</h1>
                <p>Profilbild:
                    <img src={profilbild}></img>
                </p>
            </div>
        )
    }

    else

    return (
        <div>
            <h1 className='font-bold text-2xl'>This is a Homepage</h1>
            <p>Eingeloggt als:</p>
            <p>Username: {username}</p>
            <p>Vorname: {vorname}</p>
            <p>Nachname: {nachname}</p>
            <p>Profilbild:
                <img src={profilbild}></img>
            </p>
            <p>jwt ist: {jwtToken == '' ? 'Nicht gesetzt' : jwtToken}</p>
        </div>
    )
}

export default Home;