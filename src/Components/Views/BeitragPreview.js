import React from "react";
import { Link } from "react-router-dom";

function BeitragPreview(props) {
    return (
        <Link   
            to={`/beitraege/${props.beitrag.id}`}>
            <div 
                className="p-3 border-b hover:text-orange-200 hover:bg-red-400">
                    
            
                <div>
                    <span>ID: {props.beitrag.id}</span>
                </div>
                <div>
                    <span>Titel: {props.beitrag.title}</span>
                </div>
                <div>
                    <span>Author: {props.beitrag.author}</span>
                </div>
                <div>
                    <span>Vorschau: 
                        {
                            ' '.concat(props.beitrag.content.substring(0, 80)).concat('...')
                        }
                    </span>
                </div>
            </div>
        </Link>

    )

}

export default BeitragPreview;