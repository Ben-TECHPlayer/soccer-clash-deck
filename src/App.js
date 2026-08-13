// Importer React ainsi que ses routeurs
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer le header ainsi que sa customisation
import Header from "./components/Header";
import "./styles/Header.css";

function App() {
    return (
        <div className="App">
            <Router>
                {/* Ajouter le header contenant le menu responsive */}
                <Header />
            </Router>
        </div>
    );
}

export default App;
