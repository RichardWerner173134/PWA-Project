import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



function Beitrag() {
    const { id } = useParams();

    const url = `http://localhost:8080/beitraege/${id}`;

    const [beitrag, setBeitrag] = useState();
    let content = <div>Beitrag not found</div>;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBeitrag(response.data);
            });
    }, [url]);

    if (beitrag) {
        content =
            <div
                className="p-3 border-b hover:text-orange-200 hover:bg-red-400">
                <div>
                    <span>ID: {beitrag.id}</span>
                </div>
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