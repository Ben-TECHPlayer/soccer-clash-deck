// Importer React ainsi que ses routeurs
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer nos composants
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importer nos fichiers de style
import "./styles/Header.css";
import "./styles/Footer.css";

function App() {
    return (
        <div className="App">
            <Router>
                {/* Ajouter le header contenant le menu responsive */}
                <Header />
                {/* Ajouter notre footer contenant nos contacts */}
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
