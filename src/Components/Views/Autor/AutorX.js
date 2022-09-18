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

            <div className="card w-96 left-1/3 bg-orange-300 shadow-xl">
                <figure><img src={author.profilBild} alt={author.author} /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">
                            {author.author}
                        </h2>
                        <p>Hier könnte eine nützliche Information des Autors stehen.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{author.vorname}</div> 
                            <div className="badge badge-outline">{author.nachname}</div>
                        </div>
                    </div>
            </div>

        </div>;
    }

    return (
        <div>{content}</div>
    )
}

export default AutorX;