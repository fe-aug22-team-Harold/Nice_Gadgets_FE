import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/phones">Phones</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}
