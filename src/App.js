// Importer React ainsi que ses routeurs
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer la page de génération de compos ainsi que sa customisation
import Lineup from "./pages/Lineup";
import "./styles/Lineup.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {/* Ajouter notre page qui va nous permettre de générer nos compos possibles */}
                    <Route path="/lineup" element={<Lineup />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
