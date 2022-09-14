import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Autoren() {
    const url = 'http://localhost:8080/users';

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
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
                            <tr class="hover">
                                <td>                             
                                    <Link
                                        to={`/autoren/${user.author}`}>
                                        {user.author}
                                    </Link>
                                </td>

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