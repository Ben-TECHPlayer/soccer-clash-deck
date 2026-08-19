import React, { useState, useContext } from 'react';

// Importer le context
import { LevelContext } from '../context/LevelContext';

/* Importer nos composants */

// Importer nos compoosants utilitaires
import SelectCard from '../components/SelectCard';
import ChosenLineup from '../components/ChosenLineup';

// Importer nos tableaux pour nos cartes équipes
import PortugalTable from '../components/teams/select/PortugalTable';
import BrazilTable from '../components/teams/select/BrazilTable';
import FranceTable from '../components/teams/select/FranceTable';
import NorwayTable from '../components/teams/select/NorwayTable';
import MexicoTable from '../components/teams/select/MexicoTable';
import UnitedStatesTable from '../components/teams/select/UnitedStatesTable';
import EnglandTable from '../components/teams/select/EnglandTable';
import GermanyTable from '../components/teams/select/GermanyTable';
import SpainTable from '../components/teams/select/SpainTable';
import ArgentineTable from '../components/teams/select/ArgentineTable';

// Importer la customisation
import '../styles/Lineup.css';
import '../styles/SelectCard.css';
import '../styles/Tableau.css';

function Lineup() {

    // Réinitialiser les données
    const { resetAllLevels } = useContext(LevelContext);

    // Demander à l'utilisateur de confirmer s'il veut réinitialiser les données
    const handleReset = () => {
        if (window.confirm("Tout effacer ?")) {
            resetAllLevels("Are you sure you want to reset all cards to Level 0?");
            setSelectedCardTable(null);
        }
    };
    const [selectedCardTable, setSelectedCardTable] = useState(null); 

    return (
        <main>
            <div className='header-lineup'>
                <h1>Lineups</h1>
                <button style={{cursor: 'pointer', fontSize: '20px', backgroundColor: 'red', border: 'none', padding: '10px 20px', borderRadius: '5px', color: 'white', float: 'right'}} onClick={handleReset}>Reset All</button> 
            </div>

            {/* Afficher les cartes */}
            <SelectCard setSelectedCardTable={setSelectedCardTable} selectedCardTable={selectedCardTable} showLevels={true} autoSelect={true} />
            
            {/* Afficher les deux tableaux correspondants à la carte équipe cliquée */}
            {selectedCardTable === "portugal-table" && <PortugalTable/>}
            {selectedCardTable === "brazil-table" && <BrazilTable/>}
            {selectedCardTable === "france-table" && <FranceTable/>}
            {selectedCardTable === "argentine-table" && <ArgentineTable/>}
            {selectedCardTable === "spain-table" && <SpainTable/>}
            {selectedCardTable === "germany-table" && <GermanyTable/> }
            {selectedCardTable === "england-table" && <EnglandTable/>}
            {selectedCardTable === "united-states-table" && <UnitedStatesTable/>}
            {selectedCardTable === "mexico-table" && <MexicoTable/>}
            {selectedCardTable === "norway-table" && <NorwayTable/>}
            
            {/* Afficher le système de lineup consistant à composer notre lineup */}
            <ChosenLineup /> 

            {/* Informer aux utilisateurs que certains données sont incomplets ou incorrects, et seront mises à jour dès que possible */}
            <p style={{marginTop: '20px', fontStyle: 'italic'}}>
                Note: Missing data for some item statistics will be updated soon.
            </p>      
        </main>        
    );
}

export default Lineup;