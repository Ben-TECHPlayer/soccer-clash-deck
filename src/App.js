// Importer React ainsi que ses routeurs
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importer nos équipes
import Portugal from "./pages/teams/database/Portugal";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/card/teams/database/portugal" element={<Portugal />} />
                    {/* <Route path="/card/teams/database/brazil" element={<Brazil />} />
                    <Route path="/card/teams/database/france" element={<France />} />
                    <Route path="/card/teams/database/argentine" element={<Argentine />} />
                    <Route path="/card/teams/database/spain" element={<Spain />} />
                    <Route path="/card/teams/database/germany" element={<Germany />} />
                    <Route path="/card/teams/database/england" element={<England />} />
                    <Route path="/card/teams/database/united-states" element={<UnitedStates />} />
                    <Route path="/card/teams/database/mexico" element={<Mexico />} />
                    <Route path="/card/teams/database/norway" element={<Norway />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
