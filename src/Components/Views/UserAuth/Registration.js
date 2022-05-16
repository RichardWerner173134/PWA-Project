import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'

const USER_REGEX = /^[a-zA][a-zA-Z0-9-_]{3, 23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Registration() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        useRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    }, [user]);

    useEffect(() =>{
        const result = PWD_REGEX.test(pwd);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]); 

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);


    return (
        <section>
            <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}>{errMsg}</p>
            <h1>Register</h1>
            <form>
                <label htmlFor='username'>
                    Username:
                    <span className={validName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />                        
                    </span>
                </label>
                <input 
                    type="text"
                    id="username"
                    ref={useRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    onFocus={() => setUserFocus(trie)}
                    onBlue={() => setUserFocus(false)} 
                />
            </form>
        </section>
    )
}

export default Registration;
