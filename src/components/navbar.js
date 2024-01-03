import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';


const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <h3>NavBar</h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">My World</a>
                <a href="#">Blog</a>
                <a href="#">About Me</a>
                <button onClick={showNavbar} className='nav-btn nav-close-btn'><FaTimes /></button>
            </nav>
            <button onClick={showNavbar} className='nav-btn'><FaBars /></button>
        </header >
    )
}

export default Navbar;