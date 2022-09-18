import React from "react";
import { Link } from "react-router-dom";

function BeitragPreview(props) {
    return (
        //<div className="card w-96 bg-base-100 shadow-xl m-6">
        <div className="card w-3/5 bg-base-100 shadow-xl m-6">
            <div className="card-body">

                <div className="card-title">
                    <span>Titel: {props.beitrag.title}</span>
                </div>
                <div>
                    <span>Autor: {props.beitrag.author}</span>
                </div>
                <div>
                    <span>Verfasst am: {new Date(props.beitrag.creationTime).toLocaleString()}</span>
                </div>
                <div>
                    <span>Vorschau:
                        {
                            ' '.concat(props.beitrag.content.substring(0, 80)).concat('...')
                        }
                    </span>
                </div>
                <div className="card-actions justify-end">
                    <Link
                        to={`/beitraege/${props.beitrag.id}`}
                    >
                        <button className="btn btn-outline btn-primary">Weiterlesen!</button>
                    </Link>
                </div>
            </div>
        </div>

    )

}

export default BeitragPreview;