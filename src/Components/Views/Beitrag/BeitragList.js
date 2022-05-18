import axios from "axios";
import React, { useEffect, useState } from "react";
import BeitragPreview from "./BeitragPreview";


function BeitragList() {
    const url = `http://localhost:8080/beitraege`;

    const [beitraege, setBeitraege] = useState(null);

    let content = null;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBeitraege(response.data);
            })
    }, [url]);

    if (!beitraege) {
        content = <div>nothing</div>;
    } else {
        content = beitraege.map(beitrag => {    
            return <BeitragPreview
                key={beitrag.id}
                beitrag={beitrag}
            />
        });
    }

    return (
        <div className="flex flex-col items-center w-screen">
            {content}
        </div>
    );
}

export default BeitragList;