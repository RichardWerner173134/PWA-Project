import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalState, setGlobalState } from "../../..";


function Beitrag() {
    const [username, setUsername] = useGlobalState("username");
    const { id } = useParams();
    const [beitrag, setBeitrag] = useState();

    const url = `http://localhost:8080/beitraege/${id}`;

    let content = <div>Beitrag not found</div>;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBeitrag(response.data);
                let body = {
                    date: new Date(),
                    user: username
                }
                axios.post(`http://localhost:8080/beitraege/${id}/addView`, body)
                    .then(resp => {
                        console.log("Viewcount erhöht");
                    })
            });
    }, [url]);

    if (beitrag) {
        content =
            <div
                className="p-3 border-b hover:text-orange-200 hover:bg-red-400">
                <div>
                    <span>Titel: {beitrag.title}</span>
                </div>
                <div>
                    <span>Author:
                        <Link
                            to={`/autoren/${beitrag.author}`}>
                            {beitrag.author}
                        </Link>
                    </span>
                </div>
                <div>
                    <span>Verfasst am: {beitrag.creationTime}</span>
                </div>
                <div>
                    <span>Inhalt: {beitrag.content}</span>
                </div>
                <div>
                    <span>Anzahl Views: {beitrag.views}</span>
                </div>
            </div>
    }

    return (
        <div>{content}</div>
    )
}

export default Beitrag;