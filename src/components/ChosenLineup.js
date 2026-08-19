// import React, { useContext, useMemo, useState } from "react";
// import { LevelContext } from "../context/LevelContext";
// import { CARDS_DATA } from "../data/cardData";

// export default function ChosenLineup() {
//   const { savedLevels } = useContext(LevelContext);

// //   const [gameMode, setGameMode] = useState("grand-tour");
// //   const [levelCap, setLevelCap] = useState(15);
//   const [selectedLineupIdx, setSelectedLineupIdx] = useState(0);
// //   const [tournamentLevel, setTournamentLevel] = useState("master");

//   // Filtrer les personnages, par défaut, on met filtre pour tous les personnages
//   const [charFilter, setCharFilter] = useState("All");

//   const [minStats, setMinStats] = useState({
//     sp: "",
//     ag: "",
//     vo: "",
//     st: "",
//   });

//   const statLabels = [
//     { label: "Striker Power", key: "sp" },
//     { label: "Agility", key: "ag" },
//     { label: "Volley", key: "vo" },
//     { label: "Stamina", key: "st" },
//   ];

//   const handleMinStatChange = (key, value) => {
//     const v = value.replace(/[^0-9]/g, "");
//     setMinStats((prev) => ({ ...prev, [key]: v }));
//   };

//   // ---------- Helper Stats ----------
//   const computeStats = (stats, level) => {
//     const i = Math.max(0, level - 1);
//     const safe = (v) => (v === "-" || v == null ? 0 : Number(v));
//     return {
//       sp: safe(stats.strikerPower?.[i]),
//       ag: safe(stats.agility?.[i]),
//       vo: safe(stats.volley?.[i]),
//       st: safe(stats.stamina?.[i]),
//     };
//   };

//   const totalPower = (s) =>
//     s.sp + s.ag + s.vo + s.st;

//   // On veut générer les meilleurs lineups
// //   const bestItems = useMemo(() => {
// //     if (!savedLevels || Object.keys(savedLevels).length === 0) return {};

// //     // const cats = {
// //     //   Character: [],
// //     //   Racket: [],
// //     //   Grip: [],
// //     //   Shoe: [],
// //     //   Wristband: [],
// //     //   Nutrition: [],
// //     //   Workout: [],
// //     // };

// //     // Object.keys(savedLevels).forEach((path) => {
// //     //   const level = savedLevels[path];
// //     //   const data = CARDS_DATA[path];
// //     //   if (data && level > 0) {
// //     //     cats[data.type].push({
// //     //       id: path,
// //     //       name: data.name,
// //     //       level,
// //     //       rawStats: data.stats, // On garde les stats brutes pour recalculer après
// //     //     });
// //     //   }
// //     // });

// //     const result = {};

// //     // Object.keys(cats).forEach((cat) => {
// //     //   const processed = cats[cat].map((item) => {
// //     //     // Pour le tri initial (Top 10), on utilise une estimation.
// //     //     let sortLevel = item.level;
        
// //     //     // En mode Tournament/Grand Tour, on cap dès le tri pour ne pas sélectionner des items lvl 15 inutiles en Rookie
// //     //     if (gameMode !== "regular") {
// //     //         sortLevel = Math.min(item.level, levelCap);
// //     //     }
// //     //     // En Regular, on garde le niveau max pour le tri (car le cap dépendra du perso choisi)

// //     //     const s = computeStats(item.rawStats, sortLevel);
// //     //     return {
// //     //       ...item,
// //     //       sortStats: s, 
// //     //       sortPower: totalPower(s),
// //     //     };
// //     //   });

// //     //   processed.sort((a, b) => b.sortPower - a.sortPower);
// //     //   result[cat] = processed;
// //     // });

// //     return result;
// //   }, [savedLevels, gameMode, levelCap]);


//   // Générer les lineups
// //   const lineups = useMemo(() => {
// //     if (!bestItems.Character?.length) return [];

// //     // Filtrer les personnages
// //     let charsSource = bestItems.Character || [];
// //     if (charFilter !== "All") {
// //         charsSource = charsSource.filter(c => c.name === charFilter);
// //     }
// //     // const chars = charsSource.slice(0, 10);

// //     // const rackets = bestItems.Racket.slice(0, 10);
// //     // const grips = bestItems.Grip.slice(0, 10);
// //     // const shoes = bestItems.Shoe.slice(0, 5);
// //     // const wrists = bestItems.Wristband.slice(0, 5);
// //     // const nutritions = bestItems.Nutrition.slice(0, 5);
// //     // const workouts = bestItems.Workout.slice(0, 5);

// //     const minSp = parseInt(minStats.se || 0);
// //     const minAg = parseInt(minStats.ag || 0);
// //     const minVo = parseInt(minStats.vo || 0);
// //     const minSt = parseInt(minStats.st || 0);

// //     const result = [];

// //     // Helper pour recalculer un item selon un cap donné
// //     const prepareItem = (item, cap) => {
// //         const effLevel = Math.min(item.level, cap);
// //         return {
// //             ...item,
// //             effectiveLevel: effLevel,
// //             finalStats: computeStats(item.rawStats, effLevel)
// //         };
// //     };

// //     // chars.forEach((c) => {
// //     //     // On détermine la limite de niveau
// //     //     let currentCap = levelCap; // Par défaut (Grand Tour / Tournament)
// //     //     let charEffLevel = c.level; // Par défaut

// //     //     if (gameMode === "tournament" || gameMode === "grand-tour") {
// //     //         charEffLevel = Math.min(c.level, levelCap);
// //     //     }
// //     //     else if (gameMode === "regular") {
// //     //         // REGULAR : Cap des objets = Niveau du Perso + 2 (Max 15)
// //     //         // Le perso lui-même reste à son niveau réel (sauf si > 15, ce qui est impossible dans le jeu actuel)
// //     //         currentCap = Math.min(15, c.level + 2);
// //     //         charEffLevel = c.level; 
// //     //     }

// //     //     // Préparation du Personnage
// //     //     const charItem = {
// //     //         ...c,
// //     //         effectiveLevel: charEffLevel,
// //     //         finalStats: computeStats(c.rawStats, charEffLevel)
// //     //     };

// //     //     // Préparation des listes d'items (CAPPÉS PAR CHAR + 2)
// //     //     const curRackets = rackets.map(i => prepareItem(i, currentCap));
// //     //     const curGrips = grips.map(i => prepareItem(i, currentCap));
// //     //     const curShoes = shoes.map(i => prepareItem(i, currentCap));
// //     //     const curWrists = wrists.map(i => prepareItem(i, currentCap));
// //     //     const curNutritions = nutritions.map(i => prepareItem(i, currentCap));
// //     //     const curWorkouts = workouts.map(i => prepareItem(i, currentCap));

// //     //     // Boucles imbriquées
// //     //     curRackets.forEach((r) => {
// //     //         curGrips.forEach((g) => {
// //     //             curShoes.forEach((s) => {
// //     //                 curWrists.forEach((w) => {
// //     //                     curNutritions.forEach((n) => {
// //     //                         curWorkouts.forEach((wk) => {
// //     //                             const totals = {
// //     //                                 ag: charItem.finalStats.ag + r.finalStats.ag + g.finalStats.ag + s.finalStats.ag + w.finalStats.ag + n.finalStats.ag + wk.finalStats.ag,
// //     //                                 st: charItem.finalStats.st + r.finalStats.st + g.finalStats.st + s.finalStats.st + w.finalStats.st + n.finalStats.st + wk.finalStats.st,
// //     //                                 se: charItem.finalStats.se + r.finalStats.se + g.finalStats.se + s.finalStats.se + w.finalStats.se + n.finalStats.se + wk.finalStats.se,
// //     //                                 vo: charItem.finalStats.vo + r.finalStats.vo + g.finalStats.vo + s.finalStats.vo + w.finalStats.vo + n.finalStats.vo + wk.finalStats.vo,
// //     //                                 fo: charItem.finalStats.fo + r.finalStats.fo + g.finalStats.fo + s.finalStats.fo + w.finalStats.fo + n.finalStats.fo + wk.finalStats.fo,
// //     //                                 ba: charItem.finalStats.ba + r.finalStats.ba + g.finalStats.ba + s.finalStats.ba + w.finalStats.ba + n.finalStats.ba + wk.finalStats.ba,
// //     //                             };

// //     //                             if (
// //     //                                 totals.ag >= minAg &&
// //     //                                 totals.st >= minSt &&
// //     //                                 totals.se >= minSe &&
// //     //                                 totals.vo >= minVo &&
// //     //                                 totals.fo >= minFo &&
// //     //                                 totals.ba >= minBa
// //     //                             ) {
// //     //                                 result.push({
// //     //                                     items: {
// //     //                                         Character: charItem,
// //     //                                         Racket: r,
// //     //                                         Grip: g,
// //     //                                         Shoe: s,
// //     //                                         Wristband: w,
// //     //                                         Nutrition: n,
// //     //                                         Workout: wk,
// //     //                                     },
// //     //                                     totals,
// //     //                                     totalPower: totalPower(totals),
// //     //                                 });
// //     //                             }
// //     //                         });
// //     //                     });
// //     //                 });
// //     //             });
// //     //         });
// //     //     });
// //     // });

// //     result.sort((a, b) => b.totalPower - a.totalPower);
// //     return result.slice(0, 200);
// //   }, [bestItems, minStats, charFilter, gameMode, levelCap]); 

// //   const dv = (v) => (v > 0 ? v : "-");

//   const availableCharacters = useMemo(() => {
//       if (!bestItems.Character) return [];
//       return [...new Set(bestItems.Character.map(c => c.name))].sort();
//   }, [bestItems]);


//   if (!savedLevels || Object.keys(savedLevels).length === 0) {
//     return (
//       <div style={{ padding: "20px", textAlign: "center", color: "#888" }}>
//         Please select items in the calculator above.
//       </div>
//     );
//   }

//   const selected = lineups[selectedLineupIdx];

//   return (
//     <div className="selected-choice-lineup" style={{ padding: "10px" }}>
//       <h2 style={{textAlign: 'left'}}>Find your dream lineup</h2>

//       {/* GAME MODE + LEVEL CAP */}
//       <div style={{ marginBottom: "20px" }}>
//         {/* <h3 style={{marginBottom: "-20px"}}>Game Mode</h3>
//         <div className="choice-category-games-lineup">
//             <button style={{ opacity: gameMode === "grand-tour" ? 1 : 0.6 }} onClick={() => setGameMode('grand-tour')}>Grand Tour</button>
//             <button style={{ opacity: gameMode === "regular" ? 1 : 0.6 }} onClick={() => setGameMode('regular')}>Regular</button>
//             <button style={{ opacity: gameMode === "tournament" ? 1 : 0.6 }} onClick={() => setGameMode('tournament')}>Tournaments</button>
//         </div> */}

//         {/* --- FILTRE CHARACTER --- */}
//         <div style={{marginTop: "15px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap"}}>
//             <span style={{fontWeight: "bold"}}>Filter Character:</span>
//             <select 
//                 value={charFilter} 
//                 onChange={(e) => {
//                     setCharFilter(e.target.value);
//                     setSelectedLineupIdx(0); 
//                 }}
//                 style={{
//                     padding: "5px",
//                     borderRadius: "5px",
//                     border: "1px solid #ccc",
//                     minWidth: "150px"
//                 }}
//             >
//                 <option value="All">All Characters</option>
//                 {availableCharacters.map((name) => (
//                     <option key={name} value={name}>{name}</option>
//                 ))}
//             </select>
//         </div>

//         {/* {gameMode === "grand-tour" && (
//             <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginTop: "10px",
//                 gap: "1rem",
//             }}>
//                 <span style={{ fontWeight: "bold" }}>Level Cap</span>
//                 <input
//                     type="number"
//                     min="1"
//                     max="15"
//                     value={levelCap}
//                     onChange={(e) =>
//                         setLevelCap(Math.min(15, Math.max(1, Number(e.target.value))))
//                     }
//                     style={{width: "70px", padding: "5px", textAlign: "center"}}
//                 />
//             </div>
//         )} */}

//         {/* {gameMode === "tournament" && (
//           <div className="choice-category-level-tournament-lineup" style={{ marginTop: "10px" }}>
//             <button style={{opacity: tournamentLevel === "rookie" ? 1 : 0.6}} onClick={() => { setLevelCap(6); setTournamentLevel("rookie"); }}>Rookie (6)</button>
//             <button style={{opacity: tournamentLevel === "junior" ? 1 : 0.6}} onClick={() => { setLevelCap(9); setTournamentLevel("junior"); }}>Junior (9)</button>
//             <button style={{opacity: tournamentLevel === "challenger" ? 1 : 0.6}} onClick={() => { setLevelCap(12); setTournamentLevel("challenger"); }}>Challenger (12)</button>
//             <button style={{opacity: tournamentLevel === "master" ? 1 : 0.6}} onClick={() => { setLevelCap(15); setTournamentLevel("master"); }}>Master (15)</button>
//           </div>
//         )}

//         {gameMode === "regular" && (
//           <p style={{ fontStyle: "italic" }}>Auto (Max = Character Level + 2)</p>
//         )} */}
//       </div>

//         {/* TABLEAU DES LINEUPS */}
//         {lineups.length === 0 && (
//         <div style={{padding:'20px', color:'red', border:'1px solid red', margin:'10px 0'}}>
//             {charFilter !== "All" 
//                 ? `No lineup found for ${charFilter} with these stats.` 
//                 : "No lineup matches your minimum stat requirements. Try lowering the filters."
//             }
//         </div>
//     )}

//     <div className="best-lineup-grid-container" style={{overflowX: 'auto', marginBottom:'20px'}}>
//         <table className="best-lineup-table">
//             <thead>
//                 <tr>
//                     <th style={{textAlign:'left', paddingLeft:'10px', backgroundColor:'#999', minWidth:'100px'}}>Stat</th>
//                     <th style={{textAlign:'center', backgroundColor:'#999', minWidth:'100px'}}>Min Filter</th>
//                     {lineups.map((l, idx) => (
//                         <th key={idx} 
//                             onClick={() => setSelectedLineupIdx(idx)} 
//                             className={selectedLineupIdx === idx ? "col-selected" : "clickable"} 
//                             style={{cursor: 'pointer', minWidth: '40px'}}
//                         >
//                             #{idx + 1}
//                         </th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {statLabels.map(({label, key}) => (
//                     <tr key={key}>
//                         <td style={{textAlign:'left', fontWeight:'bold', color:'blue', backgroundColor:'#fff', paddingLeft:'10px'}}>
//                             {label}
//                         </td>
//                         <td style={{backgroundColor:'#fff'}}>
//                             <input
//                                 type="number"
//                                 min="0"
//                                 max="200"
//                                 value={minStats[key]}
//                                 onChange={(e) => handleMinStatChange(key, e.target.value)}
//                                 style={{
//                                     width:'60px',
//                                     padding:'4px',
//                                     border:'1px solid #ccc',
//                                     backgroundColor: minStats[key] ? '#e3f2fd' : 'white',
//                                     fontWeight: minStats[key] ? 'bold' : 'normal'
//                                 }}
//                             />
//                         </td>
//                         {lineups.map((l, idx) => (
//                             <td key={idx} 
//                                 onClick={() => setSelectedLineupIdx(idx)} 
//                                 className={selectedLineupIdx === idx ? "col-selected" : "clickable"} 
//                                 style={{
//                                     cursor: 'pointer',
//                                     color: (minStats[key] > 0 && l.totals[key] >= minStats[key]) ? '#2e7d32' : 'inherit',
//                                     fontWeight: (selectedLineupIdx === idx) ? 'bold' : 'normal'
//                                 }}
//                             >
//                                 {l.totals[key]}
//                             </td>
//                         ))}
//                     </tr>
//                 ))}

//                 <tr className="row-total-power">
//                     <td colSpan={2} style={{textAlign:'right', fontWeight:'bold', paddingRight:'10px'}}>Total Power (Desc):</td>
//                     {lineups.map((l, idx) => (
//                         <td key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{fontWeight:'bold', cursor:'pointer'}}>
//                             {l.totalPower}
//                         </td>
//                     ))}
//                 </tr>

//                 <tr style={{backgroundColor: '#666', color: 'white'}}>
//                     <td colSpan={2} style={{textAlign:'right', fontWeight:'bold', paddingRight:'10px'}}>Character:</td>
//                     {lineups.map((l, idx) => {
//                         const char = l.items.Character;
//                         return (
//                             <td key={idx} onClick={() => setSelectedLineupIdx(idx)} className={selectedLineupIdx === idx ? "col-selected" : "clickable"} style={{cursor: 'pointer', fontSize:'0.8rem'}}>
//                                 {char.name}
//                             </td>
//                         );
//                     })}
//                 </tr>
//             </tbody>
//         </table>
//     </div>


//       {/* Tableau du lineup selectionné */}
//       <div className='chosen-lineup-scrollable'>
//         {selected ? (
//             <table className='chosen-lineup'>
//                 <caption>Lineup selected #{selectedLineupIdx + 1}</caption>
//                 <thead>
//                     <tr>
//                         <th>Category</th>
//                         <th>Selected Item Name</th>
//                         <th>Sp</th><th>Ag</th><th>Vo</th><th>St</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {['Character','Racket','Grip','Shoe','Wristband','Nutrition','Workout'].map(cat => {
//                         const item = selected.items?.[cat] || { name: "-", level: 0, finalStats: {} };
//                         // Ici, on utilise "finalStats" qui a été calculé DANS la boucle (cappé correctement)
//                         // et "effectiveLevel" qui a aussi été stocké.
//                         const s = item.finalStats || { ag:0, st:0, se:0, vo:0, fo:0, ba:0 };

//                         return (
//                             <tr key={cat}>
//                                 <td>{cat}</td>
//                                 <td>
//                                     {item.name !== "-" ? (
//                                         <>
//                                             <strong>{item.name}</strong>
//                                             <span style={{color:'#666', fontSize:'0.9em', marginLeft:'5px'}}>
//                                                 (Lvl {item.effectiveLevel})
//                                             </span>
//                                         </>
//                                     ) : "-"}
//                                 </td>
//                                 <td>{dv(s.ag)}</td><td>{dv(s.st)}</td><td>{dv(s.se)}</td>
//                                 <td>{dv(s.vo)}</td><td>{dv(s.fo)}</td><td>{dv(s.ba)}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//                 <tfoot>
//                     <tr>
//                         <th colSpan={2}>Total Power({selected.totalPower}):</th>
//                         <th>{selected.totals.sp}</th>
//                         <th>{selected.totals.ag}</th>
//                         <th>{selected.totals.vo}</th>
//                         <th>{selected.totals.st}</th>
//                     </tr>
//                 </tfoot>
//             </table>
//         ) : (
//             <div style={{padding:'20px', textAlign:'center', color:'#666'}}>
//                 No lineup selected.
//             </div>
//         )}
//     </div>

//     </div>
//   );
// }