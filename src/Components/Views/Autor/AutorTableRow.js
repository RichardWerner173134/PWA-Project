import React from "react";
import { Link } from "react-router-dom";

function AutorTableRow(props) {
    return (
        <tr className="hover">
            <td>
                <div className="tooltip tooltip-right" data-tip="Profil anschauen">
                    <div>
                        <Link
                            to={`/autoren/${props.author.author}`}>
                            {props.author.author}
                        </Link>
                    </div>
                </div>

            </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={props.author.profilBild} alt="no img"/>
                    </div>
                </div>
            </td>

            <td>{props.author.vorname}</td>
            <td>{props.author.nachname}</td>

        </tr>
    )
}



export default AutorTableRow;