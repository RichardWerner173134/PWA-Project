import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AutorX() {
    const [author, setAuthor] = useState();
    const { id } = useParams();
    
    
    const url = `http://localhost:8080/users/${id}`;

    let content = <div>Author not found</div>;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response);
                setAuthor(response.data);
            });
    }, [url]);

    if (author) {
        content = <div>
            <p>{author.author}</p>
            <p>{author.vorname}</p>
            <p>{author.nachname}</p>
            <p>
                <img src={author.profilBild}></img>
            </p>
        </div>;
    }

    return (
        <div>{content}</div>
    )
}

export default AutorX;