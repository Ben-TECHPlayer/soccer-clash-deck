import React, { useContext, useMemo, useState } from "react";
import { LevelContext } from "../context/LevelContext";

// Assure-toi que ce chemin pointe bien vers ton fichier de données contenant tes équipes
import { CARDS_DATA } from "../data/cardData";

export default function ChosenLineup() {
  const { savedLevels } = useContext(LevelContext);

  const [selectedLineupIdx, setSelectedLineupIdx] = useState(0);

  // Les 4 statistiques du football
  const [minStats, setMinStats] = useState({
    sp: "", // Striker Power
    ag: "", // Agility
    vo: "", // Volley
    st: "", // Stamina
  });

  const statLabels = [
    { label: "Striker Power", key: "sp" },
    { label: "Agility", key: "ag" },
    { label: "Volley", key: "vo" },
    { label: "Stamina", key: "st" },
  ];

  const handleMinStatChange = (key, value) => {
    const v = value.replace(/[^0-9]/g, "");
    setMinStats((prev) => ({ ...prev, [key]: v }));
    // Réinitialiser la sélection à la première équipe trouvée quand on change les filtres
    setSelectedLineupIdx(0); 
  };

  // ---------- Helper Stats ----------
  const computeStats = (stats, level) => {
    const i = Math.max(0, level - 1);
    const safe = (v) => (v === "-" || v == null ? 0 : Number(v));
    return {
      sp: safe(stats.strikerPower?.[i]),
      ag: safe(stats.agility?.[i]),
      vo: safe(stats.volley?.[i]),
      st: safe(stats.stamina?.[i]),
    };
  };

  const totalPower = (s) => s.sp + s.ag + s.vo + s.st;

  // ---------- Filtrer et trier les équipes ----------
  const lineups = useMemo(() => {
    if (!savedLevels || Object.keys(savedLevels).length === 0) return [];

    const result = [];

    const minSp = parseInt(minStats.sp || 0);
    const minAg = parseInt(minStats.ag || 0);
    const minVo = parseInt(minStats.vo || 0);
    const minSt = parseInt(minStats.st || 0);

    // On parcourt uniquement les équipes enregistrées dans le Context
    Object.keys(savedLevels).forEach((path) => {
      const level = savedLevels[path];
      const data = CARDS_DATA[path];

      if (data && level > 0) {
        const finalStats = computeStats(data.stats, level);

        // Vérifier si l'équipe possède le minimum requis pour chaque stat
        if (
          finalStats.sp >= minSp &&
          finalStats.ag >= minAg &&
          finalStats.vo >= minVo &&
          finalStats.st >= minSt
        ) {
          result.push({
            team: {
              name: data.name,
              level: level,
            },
            totals: finalStats,
            totalPower: totalPower(finalStats),
          });
        }
      }
    });

    // Trier par Total Power décroissant
    result.sort((a, b) => b.totalPower - a.totalPower);
    return result;
  }, [savedLevels, minStats]); 

  const dv = (v) => (v > 0 ? v : "-");

  if (!savedLevels || Object.keys(savedLevels).length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#888" }}>
        Please select team levels in the calculator above.
      </div>
    );
  }

  const selected = lineups[selectedLineupIdx];

  return (
    <div className="selected-choice-lineup" style={{ padding: "10px" }}>
      <h2 style={{textAlign: 'left'}}>Find your best team</h2>

        {/* TABLEAU DES LINEUPS */}
        {lineups.length === 0 && (
        <div style={{padding:'20px', color:'red', border:'1px solid red', margin:'10px 0'}}>
            No team matches your minimum stat requirements. Try lowering the filters.
        </div>
      )}

      <div className="best-lineup-grid-container" style={{overflowX: 'auto', marginBottom:'20px'}}>
          <table className="best-lineup-table">
              <thead>
                  <tr>
                      <th style={{textAlign:'left', paddingLeft:'10px', backgroundColor:'#999', minWidth:'100px'}}>Stat</th>
                      <th style={{textAlign:'center', backgroundColor:'#999', minWidth:'100px'}}>Min Filter</th>
                      {lineups.map((l, idx) => (
                          <th key={idx} 
                              onClick={() => setSelectedLineupIdx(idx)} 
                              className={selectedLineupIdx === idx ? "col-selected" : "clickable"} 
                              style={{cursor: 'pointer', minWidth: '40px'}}
                          >
                              #{idx + 1}
                          </th>
                      ))}
                  </tr>
              </thead>
              <tbody>
                  {statLabels.map(({label, key}) => (
                      <tr key={key}>
                          <td style={{textAlign:'left', fontWeight:'bold', color:'blue', backgroundColor:'#fff', paddingLeft:'10px'}}>
                              {label}
                          </td>
                          <td style={{backgroundColor:'#fff'}}>
                              <input
                                  type="number"
                                  min="0"
                                  max="200"
                                  value={minStats[key]}
                                  onChange={(e) => handleMinStatChange(key, e.target.value)}
                                  style={{
                                      width:'60px',
                                      padding:'4px',
                                      border:'1px solid #ccc',
                                      backgroundColor: minStats[key] ? '#e3f2fd' : 'white',
                                      fontWeight: minStats[key] ? 'bold' : 'normal'
                                  }}
                              />
                          </td>
                          {lineups.map((l, idx) => (
                              <td key={idx} 
                                  onClick={() => setSelectedLineupIdx(idx)} 
                                  className={selectedLineupIdx === idx ? "col-selected" : "clickable"} 
                                  style={{
                                      cursor: 'pointer',
                                      color: (minStats[key] > 0 && l.totals[key] >= minStats[key]) ? '#2e7d32' : 'inherit',
                                      fontWeight: (selectedLineupIdx === idx) ? 'bold' : 'normal'
                                  }}
                              >
                                  {l.totals[key]}
                              </td>
                          ))}
                      </tr>
                  ))}

                  <tr className="row-total-power">
                      <td colSpan={2} style={{textAlign:'right', fontWeight:'bold', paddingRight:'10px'}}>Total Power (Desc):</td>
                      {lineups.map((l, idx) => (
                          <td key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{fontWeight:'bold', cursor:'pointer'}}>
                              {l.totalPower}
                          </td>
                      ))}
                  </tr>

                  <tr style={{backgroundColor: '#666', color: 'white'}}>
                      <td colSpan={2} style={{textAlign:'right', fontWeight:'bold', paddingRight:'10px'}}>Team:</td>
                      {lineups.map((l, idx) => (
                          <td key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{cursor: 'pointer', fontSize:'0.8rem'}}>
                              {l.team.name}
                          </td>
                      ))}
                  </tr>
              </tbody>
          </table>
      </div>

      {/* Détail de l'équipe sélectionnée */}
      <div className='chosen-lineup-scrollable'>
        {selected ? (
            <table className='chosen-lineup'>
                <caption>Team selected #{selectedLineupIdx + 1}</caption>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Selected Team Name</th>
                        <th>Sp</th><th>Ag</th><th>Vo</th><th>St</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Team</td>
                        <td>
                            <strong>{selected.team.name}</strong>
                            <span style={{color:'#666', fontSize:'0.9em', marginLeft:'5px'}}>
                                (Lvl {selected.team.level})
                            </span>
                        </td>
                        <td>{dv(selected.totals.sp)}</td>
                        <td>{dv(selected.totals.ag)}</td>
                        <td>{dv(selected.totals.vo)}</td>
                        <td>{dv(selected.totals.st)}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={2}>Total Power ({selected.totalPower}):</th>
                        <th>{selected.totals.sp}</th>
                        <th>{selected.totals.ag}</th>
                        <th>{selected.totals.vo}</th>
                        <th>{selected.totals.st}</th>
                    </tr>
                </tfoot>
            </table>
        ) : (
            <div style={{padding:'20px', textAlign:'center', color:'#666'}}>
                No team selected.
            </div>
        )}
      </div>
    </div>
  );
}