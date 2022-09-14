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

            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
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