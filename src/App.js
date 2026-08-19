// Importer React ainsi que ses routeurs
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importer nos composants
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importer nos équipes
import Portugal from "./pages/teams/database/Portugal";
import Brazil from "./pages/teams/database/Brazil";
import France from "./pages/teams/database/France";
import Argentine from "./pages/teams/database/Argentine";
import Spain from "./pages/teams/database/Spain";
import Germany from "./pages/teams/database/Germany";
import England from "./pages/teams/database/England";
import Norway from "./pages/teams/database/Norway";
import Mexico from "./pages/teams/database/Mexico";
import UnitedStates from "./pages/teams/database/UnitedStates";

// Importer la page de génération de compos ainsi que sa customisation
import Lineup from "./pages/Lineup";

// Importer nos fichiers de style
import "./styles/Header.css";
import "./styles/Footer.css";

import "./styles/Card.css";
import "./styles/Lineup.css";

import "./styles/index.css";

function App() {
    return (
        <div className="App">
            <Router>
                {/* Ajouter le header contenant le menu responsive */}
                <Header />
                <Routes>
                    {/* Ajouter nos pages d'équipes */}
                    <Route path="/card/teams/database/portugal" element={<Portugal />} />
                    <Route path="/card/teams/database/brazil" element={<Brazil />} />
                    <Route path="/card/teams/database/france" element={<France />} />
                    <Route path="/card/teams/database/argentine" element={<Argentine />} />
                    <Route path="/card/teams/database/spain" element={<Spain />} />
                    <Route path="/card/teams/database/germany" element={<Germany />} />
                    <Route path="/card/teams/database/england" element={<England />} />
                    <Route path="/card/teams/database/united-states" element={<UnitedStates />} />
                    <Route path="/card/teams/database/mexico" element={<Mexico />} />
                    <Route path="/card/teams/database/norway" element={<Norway />} />
                    
                    {/* Ajouter notre page qui va nous permettre de générer nos compos possibles */}
                    <Route path="/lineup" element={<Lineup />} />
                </Routes>
                {/* Ajouter notre footer contenant nos contacts */}
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
