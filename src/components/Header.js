import { React, useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  
    // Gérer les états sur le menu
    const [menuOpen, setMenuOpen] = useState(false);
    const [boutonCardsOpen, setBoutonCardsOpen] = useState(false);

    // Gérer le comportement sur le bouton de menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Gérer le comportement sur les boutons de l'onglet principal Cards
    const toggleCards = () => {
        setBoutonCardsOpen(!boutonCardsOpen);
    };

    // Déclarer la localisation et la ref de menu
    const location = useLocation();
    const menuRef = useRef(null);

    // Définir la localisation
    const isCardsActive = location.pathname.startsWith('/card');

    // 1. L'écouteur de "clic à l'extérieur"
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Permettre à l'utilisateur de continuer à naviguer quand il clique sur la barre de défilement à droite
            if (event.cardX >= document.documentElement.cardWidth) {
                return; // le menu reste ouvert
            }

            // Si le menu existe ET que le clic n'est pas DEDANS
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setBoutonCardsOpen(false);
                setMenuOpen(false); 
            }
        };

        // Ecouter les clics de la souris sur tout le document
        document.addEventListener("mousedown", handleClickOutside);
        
        // Nettoyer l'écouteur quand on quitte le composant
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // 2. Fermer automatiquement les menus dès qu'on change de page
    useEffect(() => {
        setBoutonCardsOpen(false);
        setMenuOpen(false);
    }, [location]);

    // Fermer le menu au scroll, SAUF sur ordinateur (largeur >= 1150px)
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 1150 && menuOpen) {
                setMenuOpen(false);
                setBoutonCardsOpen(false);
            }
        };

        // Ecouter le défilement de la page
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuOpen]); // Ce useEffect se met à jour quand menuOpen change

    return (
        <header>
            <div className="header-container">
                <div className="header-line">
                    <div className="header-title">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            <img src={`${process.env.PUBLIC_URL}/assets/logo/soccer-clash.png`} alt="Soccer Clash" />
                        </NavLink>
                    </div>
                
                    <button className="menu-toggle" aria-label="Ouvrir le menu" onClick={toggleMenu}>&#9776;</button>
                
                    <nav className="menu" ref={menuRef}>
                        <div className={`menu-main ${menuOpen ? 'show' : ''}`}>
                            
                            {/* NOUVEAU : Le bouton X pour fermer le menu */}
                            <button 
                                className="menu-close" 
                                aria-label="Fermer le menu" 
                                onClick={() => setMenuOpen(false)}
                            >
                                &times;
                            </button>

                            <div className="dropdown-group">
                                <button 
                                    className={`submenu-toggle ${boutonCardsOpen || isCardsActive ? 'active' : ''}`} 
                                    onClick={toggleCards}
                                >
                                    Cards
                                </button>

                                <div className={`submenu ${boutonCardsOpen ? 'open' : ''}`}>
                                    <NavLink to="/card/attributes/germany" className={({ isActive }) => isActive ? "active" : ""}>Germany</NavLink>
                                    <NavLink to="/card/attributes/argentine" className={({ isActive }) => isActive ? "active" : ""}>Argentine</NavLink>
                                    <NavLink to="/card/attributes/portugal" className={({ isActive }) => isActive ? "active" : ""}>Portugal</NavLink>
                                    <NavLink to="/card/attributes/france" className={({ isActive }) => isActive ? "active" : ""}>France</NavLink>
                                    <NavLink to="/card/attributes/spain" className={({ isActive }) => isActive ? "active" : ""}>Spain</NavLink>
                                    <NavLink to="/card/attributes/brazil" className={({ isActive }) => isActive ? "active" : ""}>Brazil</NavLink>
                                    <NavLink to="/card/attributes/england" className={({ isActive }) => isActive ? "active" : ""}>England</NavLink>
                                    <NavLink to="/card/attributes/united-states" className={({ isActive }) => isActive ? "active" : ""}>United States</NavLink>
                                    <NavLink to="/card/attributes/mexico" className={({ isActive }) => isActive ? "active" : ""}>Mexico</NavLink>
                                </div>
                            </div>
                            
                            <NavLink to="/lineup" className={({ isActive }) => isActive ? "active" : ""}>
                                Lineups
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;