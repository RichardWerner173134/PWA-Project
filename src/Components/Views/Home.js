import React from 'react';
import { useGlobalState } from '../..';

function Home(){
    const isLoggenIn = useGlobalState("isLoggedIn")[0];
    const jwtToken = useGlobalState("jwtToken")[0];
    const username = useGlobalState("username")[0];
    const vorname = useGlobalState("vorname")[0];
    const nachname = useGlobalState("nachname")[0];

    return (
        <div>
            <h1 className='font-bold text-2xl'>This is a Homepage</h1>
            <p>Eingeloggt: {isLoggenIn == false ? 'Nein' : 'Ja'}</p>
            <p>jwt: {jwtToken == '' ? 'Nicht gesetzt' : jwtToken}</p>
            <p>Username: {username}</p>
            <p>Vorname: {vorname}</p>
            <p>Nachname: {nachname}</p>
        </div>
    )
}

export default Home;