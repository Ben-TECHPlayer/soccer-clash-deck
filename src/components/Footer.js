import React from 'react';

function Footer() {
    return (
    <footer>
        <div className="droits-auteur">
            <p>© 2026 Ben-Ali ABOUDOU. Tous droits réservés.</p>
            <p className="marge">Étudiant en BUT Informatique à l'IUT d'Orsay</p>
        </div>
        <div className="contact-icons">
            <a href="mailto:aboudoubenali@gmail.com"><img src={`${process.env.PUBLIC_URL}/assets/social-media/gmail.png`} alt="Gmail" /></a>
            <a href="https://www.linkedin.com/in/ben-ali-aboudou/"><img src={`${process.env.PUBLIC_URL}/assets/social-media/linkedin.png`} alt="LinkedIn" /></a>
            <a href="https://www.github.com/Ben-TECHPlayer/"><img src={`${process.env.PUBLIC_URL}/assets/social-media/github.png`} alt="GitHub" /></a>
            <a href="https://www.youtube.com/@Ben_CR7"><img src={`${process.env.PUBLIC_URL}/assets/social-media/youtube.png`} alt="YouTube" /></a>
            <a href="https://www.instagram.com/ben_vivatech26"><img src={`${process.env.PUBLIC_URL}/assets/social-media/instagram.png`} alt="Instagram" /></a>
            <a href="https://www.facebook.com/@ben.gamings.tc"><img src={`${process.env.PUBLIC_URL}/assets/social-media/facebook.png`} alt="Facebook" /></a>
            <a href="https://www.x.com/Ben93_TC"><img src={`${process.env.PUBLIC_URL}/assets/social-media/twitter.png`} alt="Twitter" /></a>
        </div>
    </footer>
    );
}

export default Footer;