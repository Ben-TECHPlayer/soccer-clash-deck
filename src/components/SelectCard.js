import React, { useState, useContext, useEffect } from 'react';
import { LevelContext } from '../context/LevelContext';

function SelectCard({ setSelectedCardTable, selectedCardTable, showLevels=false, autoSelect = false }){

    const { savedLevels } = useContext(LevelContext);

    useEffect(() => {
        // On vérifie 'selectedCardTable === null' pour s'assurer qu'on est 
        // sur la page Lineup (où l'état est initialisé à null) et pas sur la page Card
        // (où la prop est undefined et où on ne veut pas déclencher de navigation auto).
        if (selectedCardTable === null) {
            setSelectedCardTable("osaka-table", "players/legends/database/Osaka");
        }
    }, []);

    const displayName = (name, path) => {
        if (showLevels && savedLevels && savedLevels[path]) {
            return `${name} (${savedLevels[path]})`;
        }
        return name;
    };

    // const handleTeamChange = (val) => {
    //     // 2. On gère l'affichage du tableau par défaut
    //     if (autoSelect) {
    //         switch (val) {
    //             case "character":
    //                 // Clic sur l'onglet principal "Character" -> Reset sur Legends / Osaka
    //                 setSelectedCharacterType("legends");
    //                 setSelectedCardTable("osaka-table", "players/legends/database/Osaka");
    //                 break;

    //             // --- CAS SPÉCIAUX POUR LES SOUS-BOUTONS ---
    //                 case "legends":
    //                     setSelectedCharacterType("legends");
    //                     setSelectedCardTable("osaka-table", "players/legends/database/Osaka");
    //                     break;
    //                 case "champions":
    //                     setSelectedCharacterType("champions");
    //                     setSelectedCardTable("jonah-table", "players/champions/database/Jonah");
    //                     break;
    //             // ------------------------------------------

    //             case "racket":
    //                 setSelectedCardTable("starter-racket-table", "attributes/racket/database/StarterRacket");
    //                 break;
    //             case "grip":
    //                 setSelectedCardTable("starter-grip-table", "attributes/grip/database/StarterGrip");
    //                 break;
    //             case "shoe":
    //                 setSelectedCardTable("starter-shoe-table", "attributes/shoe/database/StarterShoe");
    //                 break;
    //             case "wristband":
    //                 setSelectedCardTable("starter-band-table", "attributes/wristband/database/StarterBand");
    //                 break;
    //             case "nutrition":
    //                 setSelectedCardTable("starter-protein-table", "attributes/nutrition/database/StarterProtein");
    //                 break;
    //             case "workout":
    //                 setSelectedCardTable("starter-training-table", "attributes/workout/database/StarterTraining");
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
    // };

    return(
        <div className="cards-container" style={{marginTop: "2rem"}}>
            <div onClick={() => setSelectedCardTable("portugal-table", "teams/database/portugal")} style={{ color: selectedCardTable === "portugal-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/teams-characters/portugal-team.svg`} alt="Portugal" />
                <p>{displayName("Portugal", "teams/database/portugal")}</p>
            </div>
            <div onClick={() => setSelectedCardTable("brazil-table", "teams/database/brazil")} style={{ color: selectedCardTable === "brazil-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/teams-characters/brazil-team.svg`} alt="Brazil" />
                <p>{displayName("Brazil", "teams/database/brazil")}</p>
            </div>
            <div onClick={() => setSelectedCardTable("france-table", "teams/database/france")} style={{ color: selectedCardTable === "france-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/teams-characters/france-team.svg`} alt="France" />
                <p>{displayName("France", "teams/database/france")}</p>
            </div>
            <div onClick={() => setSelectedCardTable("argentine-table", "teams/database/argentine")} style={{ color: selectedCardTable === "argentine-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/argentine-team.svg`} alt="Argentine" />
                <p>{displayName("Argentine", "teams/database/argentine")}</p>
            </div>
            <div onClick={() => setSelectedCardTable("spain-table", "teams/database/spain")} style={{ color: selectedCardTable === "spain-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/teams-characters/spain-team.svg`} alt="Spain" />
                <p>{displayName("Spain", "teams/database/spain")}</p>
            </div>
            <div onClick={() => setSelectedCardTable("germany-table", "teams/database/germany")} style={{ color: selectedCardTable === "germany-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/teams-characters/germany-team.svg`} alt="Germany" />
                <p>{displayName("Germany", "teams/database/germany")}</p>
            </div>
            <div onClick={() => setSelectedCardTable("england-table", "teams/database/england")} style={{ color: selectedCardTable === "england-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/teams-characters/england-team.svg`} alt="England" />
                <p>{displayName("England", "teams/database/england")}</p>
            </div>
            <div onClick={() => setSelectedCardTable("united-states-table", "teams/database/united-states")} style={{ color: selectedCardTable === "united-states-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/teams-characters/united-states-team.svg`} alt="United States" />
                <p>{displayName("UnitedStates", "teams/database/united-states")}</p>
            </div>
            <div onClick={() => setSelectedCardTable("mexico-table", "teams/database/mexico")} style={{ color: selectedCardTable === "mexico-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/teams-characters/mexico-team.svg`} alt="Mexico" />
                <p>{displayName("Mexico", "teams/database/mexico")}</p>
            </div>
            <div onClick={() => setSelectedCardTable("norway-table", "teams/database/norway")} style={{ color: selectedCardTable === "norway-table" ? '#007bff' : 'black' }}>
                <img src={`${process.env.PUBLIC_URL}/assets/teams-characters/norway-team.svg`} alt="Norway" />
                <p>{displayName("Norway", "teams/database/norway")}</p>
            </div>
        </div>
    )
}

export default SelectCard;