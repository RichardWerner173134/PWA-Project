import React from 'react';
import {Link} from "react-router-dom";
import { useGlobalState } from './..';

function NavigationMenu(props){
    const isLoggenIn = useGlobalState("isLoggedIn")[0];
    if (isLoggenIn == false) {
        return(
            <div>
                <div className="font-bold py-3">
                    AppName
                </div>
                <ul>
                    <li>
                        <Link 
                            to="/" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/beitraege" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Beiträge
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/uploadBeitrag" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Beitrag hochladen
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/autoren" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Autoren
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/register" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Registrieren
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/login" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        )
    } 
    else
    {
        return(
            <div>
                <div className="font-bold py-3">
                    AppName
                </div>
                <ul>
                    <li>
                        <Link 
                            to="/" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/beitraege" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Beiträge
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/uploadBeitrag" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Beitrag hochladen
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/autoren" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Autoren
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/register" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Registrieren
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/logout" 
                            className='text-blue-500 py-3 border-t border.b block'
                            onClick={props.closeMenu}
                        >
                            Ausloggen
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavigationMenu;