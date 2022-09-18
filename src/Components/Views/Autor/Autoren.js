import axios from "axios";
import React, { useEffect, useState } from "react";
import AutorTableRow from "./AutorTableRow";

function Autoren() {
    const url = 'http://localhost:8080/users';

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    let content = <div>nothing to show here</div>
    
    if (users) {
        content = 
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Benutzername</th>
                            <th>Profilbild</th>
                            <th>Vorname</th>
                            <th>Nachname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                return (<AutorTableRow
                                            key={user.username}
                                            author={user} />)
                                }
                                    
                            )
                        }
                    </tbody>
                </table>
            </div>
    }

    return (
        <div>{content}</div>
    )
}

export default Autoren;