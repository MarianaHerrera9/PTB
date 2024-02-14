import React from "react";
import './footer.css';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__content">
                   <a>Home</a>
                   <a>|</a>
                   <a>Terms and Conditions</a>
                   <a>|</a>
                   <a>Privacy Policy</a>
                   <a>|</a>
                   <a>Collection Statement</a>
                   <a>|</a>
                   <a>Help</a>
                   <a>|</a>
                   <a>Manage Acount</a>
                </div>
                <div className="rights__content">
                <p> Copyright &copy; 2016 DEMO Streaming All Rigths Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer; 
