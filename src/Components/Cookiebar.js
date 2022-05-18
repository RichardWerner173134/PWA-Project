import React, { useState } from "react";


function Cookiebar() {
    const [showCookies, setShowCookies] = useState(true);

    let content;

    if (showCookies) {
        content =
            <div className="card w-full bg-neutral text-neutral-content fixed bottom-0 block">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl">Coooooooooooooooooookieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeees!</h2>
                    <p className="text-2xl">We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => setShowCookies(false)}>Accept</button>
                        <button className="btn btn-ghost" onClick={() => setShowCookies(false)}>Deny</button>
                    </div>
                </div>
            </div>;
    } else {
        content = <div></div>
    }

    return (
        content
    )

}

export default Cookiebar;