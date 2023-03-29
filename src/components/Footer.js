import React from 'react';
import '../index.css';

let year = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>copyright {year}</p>
    </footer>
}

export default Footer;