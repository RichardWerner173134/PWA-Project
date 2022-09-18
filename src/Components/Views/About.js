import React from 'react';

function About() {
    return (
        <div>
            <h1 className='font-bold text-2xl'>Dies ist ein Blog-Projekt von Richard Werner (Matrikel-Nr. 77353) und Alexander Aronov (Matrikel-Nr. 80109).</h1>

            <h2 className="text-2xl">Progressive Web Apps im Sommersemester 2022 zur Abgabe beim Prof. Dr. Michael Frank<br /><br /><br /></h2>

            <div className="flex flex-wrap justify-center fixed bottom-0 block w-full">
                <img className="max-w-sm h-auto shadow-lg" src="logoHTWK.png"></img>
            </div>
        </div>
    )
}

export default About;