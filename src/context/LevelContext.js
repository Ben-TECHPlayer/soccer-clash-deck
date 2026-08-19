import React, { createContext, useState, useEffect } from 'react';

export const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
    // 1. Initialisation depuis le LocalStorage
    const [savedLevels, setSavedLevels] = useState(() => {
        const saved = localStorage.getItem('soccerClashLevels');
        return saved ? JSON.parse(saved) : {};
    });
    
    // 2. Sauvegarde automatique à chaque changement
    useEffect(() => {
        localStorage.setItem('soccerClashLevels', JSON.stringify(savedLevels));
    }, [savedLevels]);
    
    // Sert uniquement à savoir sur quelle page on est
    const [activeItemPath, setActiveItemPath] = useState(null);

    // Fonction existante pour mettre à jour un niveau
    const updateLevel = (itemId, level) => {
        setSavedLevels(prev => {
            const newLevels = { ...prev };
            if (level === null) {
                delete newLevels[itemId]; // On supprime si désélectionné
            } else {
                newLevels[itemId] = level; // On sauvegarde
            }
            return newLevels;
        });
    };

    // --- NOUVELLE FONCTION : RESET ALL ---
    const resetAllLevels = () => {
        // On remet l'état à un objet vide.
        // Grâce à ton useEffect ci-dessus, le localStorage sera 
        // automatiquement mis à jour avec "{}" (vide) juste après.
        setSavedLevels({});
    };

    return (
        <LevelContext.Provider value={{ 
            savedLevels, 
            updateLevel, 
            resetAllLevels, // <--- NE PAS OUBLIER DE L'AJOUTER ICI
            activeItemPath, 
            setActiveItemPath 
        }}>
            {children}
        </LevelContext.Provider>
    );
};