// Importer React ainsi que ses routeurs
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            {/* <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/card" element={<Card/>} />
                    <Route path="/lineup" element={<Lineup />} />

                    <Route path="/card/teams/database/Portugal" element={<Portugal />} />
                    <Route path="/card/teams/database/France" element={<France />} />
                    <Route path="/card/teams/database/Argentine" element={<Argentine />} />
                    <Route path="/card/teams/database/Spain" element={<Spain />} />
                    <Route path="/card/teams/database/Germany" element={<Germany />} />
                    <Route path="/card/teams/database/England" element={<England />} />
                    <Route path="/card/teams/database/UnitedStates" element={<UnitedStates />} />
                    <Route path="/card/teams/database/Brazil" element={<Brazil />} />
                    <Route path="/card/teams/database/Mexico" element={<Mexico />} />
                </Routes>
                <Footer/>
            </Router> */}
        </div>
    );
}

export default App;
