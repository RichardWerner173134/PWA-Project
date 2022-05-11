import React, { useState } from "react";
import { useTransition, animated } from 'react-spring'

function Product(props){    


    return (
        <div>
            <div className="p-3 border-b hover:text-orange-200 hover:bg-red-400">
                <h1>{props.beitrag.title}</h1>
                <div>
                    {props.beitrag.content}
                </div>
            </div>
        </div>    
    )
}

export default Product;