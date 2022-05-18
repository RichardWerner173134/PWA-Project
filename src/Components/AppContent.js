import React from "react";
import Home from './Views/Home';
import About from './Views/About';
import BeitragList from './Views/Beitrag/BeitragList';
import Beitrag from './Views/Beitrag/Beitrag';
import Autoren from './Views/Autor/Autoren';
import AutorX from './Views/Autor/AutorX';
import {
    Routes,
    Route
} from "react-router-dom";

function AppContent() {
    return (
        <div className="bg-blue-200">
            <Routes>
                <Route
                    path="/"
                    element={<Home />}>
                </Route>
                <Route
                    path="/about"
                    element={<About />}>
                </Route>
                <Route
                    path="/beitraege/:id"
                    element={<Beitrag />}>
                </Route>
                <Route
                    path="/beitraege"
                    element={<BeitragList />}>
                </Route>
                <Route
                    path="/autoren"
                    element={<Autoren />}>
                </Route>
                <Route
                    path="/autoren/:id"
                    element={<AutorX />}>
                </Route>
            </Routes>
        </div>
    )
}

export default AppContent;