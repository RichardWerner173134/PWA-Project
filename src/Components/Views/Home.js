import React from 'react';
import { useGlobalState } from '../..';

function Home(){
    const isLoggenIn = useGlobalState("isLoggedIn")[0];
    const jwtToken = useGlobalState("jwtToken")[0];

    return (
        <div>
            <h1 className='font-bold text-2xl'>This is a Homepage</h1>
            <p>Eingeloggt: {isLoggenIn == false ? 'Nein' : 'Ja'}</p>
            <p>jwt: {jwtToken == '' ? 'Nicht gesetzt' : jwtToken}</p>
        </div>
    )
}

export default Home;