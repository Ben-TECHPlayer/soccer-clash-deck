// Importer React ainsi que ses routeurs
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importer nos équipes
import Portugal from "./pages/teams/database/Portugal";

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
                {/* Ajouter nos pages d'équipes */}
                <Routes>
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
                </Routes>
                {/* Ajouter notre footer contenant nos contacts */}
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
