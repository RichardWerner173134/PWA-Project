import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";


function ProductList() {
    const url = `https://blog-rw.herokuapp.com/beitraege`;

    const [beitraege, setBeitraege] = useState(null);
    
    let content = null;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBeitraege(response.data);
            })
    }, [url]);

    if(!beitraege){
        return <div>nothing</div>;
    }

    
    return (
        <div>
            {
                beitraege.map(beitrag => 
                    <Product 
                        key={beitrag.id} 
                        beitrag={beitrag}
                    />
                )
            }
        </div>
    );
}

export default ProductList;