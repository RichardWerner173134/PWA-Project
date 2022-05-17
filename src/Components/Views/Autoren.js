import axios from "axios";
import React, { useState } from "react";

function Autoren(){
    const url = 'http://localhost:8080/users';

    const[users, setUsers] = useState([]);

    axios.get(url)
        .then(response => {
            setUsers(response.data);
        });

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Vorname</th>
                        <th>Nachname</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map(user => 
                        <tr>
                            <td>{user.author}</td>
                            <td>{user.vorname}</td>
                            <td>{user.nachname}</td>
                        </tr>
                    )   
                }
                </tbody>
            </table>
        </div>
    )
}

export default Autoren;