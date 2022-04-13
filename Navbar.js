import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return ( <
        nav className = 'navbar' >
        <
        h3 className = 'Logo' > My App < /h3> <
        ul className = 'nav-links' >
        <
        Link to = '/profile'
        className = 'Profile' >
        <
        FontAwesomeIcon icon = "user" / >
        <
        /Link> <
        Link to = '/TodoList'
        className = 'TodoList' >
        <
        FontAwesomeIcon icon = "bars" / >
        <
        /Link> <
        Link to = '/'
        className = 'Masuk' >
        <
        FontAwesomeIcon icon = "key" / >
        <
        /Link> <
        /ul> <
        /nav>
    );
};

export default Navbar;