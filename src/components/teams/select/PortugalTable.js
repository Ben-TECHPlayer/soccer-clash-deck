import React, { useState, useEffect, useContext } from 'react';
import { LevelContext } from '../../../context/LevelContext'; 

function PortugalTable() {
    const ITEM_ID = "card/teams/database/portugal";

    // On récupère updateLevel au lieu de setCurrentLevel
    const { savedLevels, updateLevel, setActiveItemPath } = useContext(LevelContext);
    
    // Initialisation
    const initialLevel = savedLevels ? savedLevels[ITEM_ID] : null;
    const [selectedLevel, setSelectedLevel] = useState(initialLevel || null);

    // Gestion du Clic
    const handleLevelClick = (level) => {
        let newLevel = level;
        
        if (selectedLevel === level) {
            // Si on clique sur le même, on désactive
            newLevel = null;
        }

        setSelectedLevel(newLevel); // Mise à jour visuelle (local)
        updateLevel(ITEM_ID, newLevel); // Mise à jour mémoire (global)
        setActiveItemPath(ITEM_ID);
    };

    // Synchro au chargement
    useEffect(() => {
        setActiveItemPath(ITEM_ID);
    }, [setActiveItemPath]);

    const renderSkillCell = (level, content, isHeader = false) => {
        const isSelected = selectedLevel === level;
        const className = `clickable ${isSelected ? 'selected-col' : ''}`;
        const Tag = isHeader ? 'th' : 'td';

        return (
            <Tag 
                key={level} 
                className={className} 
                onClick={() => handleLevelClick(level)} 
            >
                {content}
            </Tag>
        );
    };

    return(
        <div className="table-container-scrollable">
            <div className="table-container">
                <table className="portugal">
                    <caption>Upgrade Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Up Cards</td>
                            <td></td>
                            <td>20</td>
                            <td>30</td>
                            <td>50</td>
                            <td>85</td>
                            <td>140</td>
                            <td>220</td>
                            <td>355</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>220</td>
                            <td>390</td>
                            <td>830</td>
                            <td>1540</td>
                            <td>3190</td>
                            <td>5270</td>
                            <td>8780</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-container">
                <table className="portugal">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            {[...Array(11)].map((_, i) => renderSkillCell(i + 1, i + 1, true))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Strike Shot</td>
                            {renderSkillCell(1, '36')}
                            {renderSkillCell(2, '40')}
                            {renderSkillCell(3, '43')}
                            {renderSkillCell(4, '47')}
                            {renderSkillCell(5, '50')}
                            {renderSkillCell(6, '54')}
                            {renderSkillCell(7, '58')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '72')}
                        </tr>
                        <tr>
                            <td>Agility</td>
                            {renderSkillCell(1, '30')}
                            {renderSkillCell(2, '33')}
                            {renderSkillCell(3, '36')}
                            {renderSkillCell(4, '39')}
                            {renderSkillCell(5, '42')}
                            {renderSkillCell(6, '45')}
                            {renderSkillCell(7, '48')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '60')}
                        </tr>
                        <tr>
                            <td>Volley</td>
                            {renderSkillCell(1, '35')}
                            {renderSkillCell(2, '38')}
                            {renderSkillCell(3, '42')}
                            {renderSkillCell(4, '45')}
                            {renderSkillCell(5, '49')}
                            {renderSkillCell(6, '53')}
                            {renderSkillCell(7, '56')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '70')}
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            {renderSkillCell(1, '31')}
                            {renderSkillCell(2, '34')}
                            {renderSkillCell(3, '37')}
                            {renderSkillCell(4, '40')}
                            {renderSkillCell(5, '43')}
                            {renderSkillCell(6, '46')}
                            {renderSkillCell(7, '49')}
                            {renderSkillCell(8, '')}
                            {renderSkillCell(9, '')}
                            {renderSkillCell(10, '')}
                            {renderSkillCell(11, '61')}
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            {renderSkillCell(1, '', true)}
                            {renderSkillCell(2, '', true)}
                            {renderSkillCell(3, '', true)}
                            {renderSkillCell(4, '', true)}
                            {renderSkillCell(5, '', true)}
                            {renderSkillCell(6, '', true)}
                            {renderSkillCell(7, '', true)}
                            {renderSkillCell(8, '', true)}
                            {renderSkillCell(9, '', true)}
                            {renderSkillCell(10, '', true)}
                            {renderSkillCell(11, '', true)}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default PortugalTable;