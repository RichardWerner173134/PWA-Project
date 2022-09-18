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
            <div className="p-5 border-b bg-base-100 shadow-xl">
                <div className="text-xl text-bold leading-5">
                    Titel: {beitrag.title}
                </div>
                <br />
                <div>
                    <span>Autor:
                        <div className="tooltip tooltip-right" data-tip="Profil anschauen">
                            <Link
                                to={`/autoren/${beitrag.author}`}>
                                &nbsp;{beitrag.author}
                            </Link>
                        </div>
                    </span>
                </div>
                <br />
                <div className="">
                    <span>Verfasst am: {new Date(beitrag.creationTime).toLocaleString()}</span>
                </div>
                <br />
                <div className="">
                    <span>Inhalt: <br />{beitrag.content}</span>
                </div>
                <br />
                <div>
                    <span>Anzahl Views: {beitrag.views}</span>
                </div>
            </div>
    }

    return (
        <div className="p-5">{content}</div>
    )
}

export default Beitrag;