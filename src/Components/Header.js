import React from "react";
import Navigation from "./Navigation";

function Header(){
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <Navigation />

            <span className="font-bold">
                PWA Blog
            </span>

        </header>
    )
}

export default Header;