// Importer React ainsi que ses routeurs
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer le footer ainsi que sa customisation
import Footer from "./components/Footer";
import "./styles/Footer.css";

function App() {
    return (
        <div className="App">
            <Router>
                {/* Ajouter notre footer contenant nos contacts */}
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
