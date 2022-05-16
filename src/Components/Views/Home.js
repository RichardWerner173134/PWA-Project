import React from 'react';
import CounterExample from './CounterExample';
import Registration from './UserAuth/Registration';

function Home(){
    return (
        <div>
            <Registration />
            <h1 className='font-bold text-2xl'>This is a Homepage</h1>
        </div>
    )
}

export default Home;