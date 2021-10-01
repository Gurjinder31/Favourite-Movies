import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" class="navbar-brand">Home</Link>
            <Link to="/like" class="navbar-brand">Like Movies</Link>
        </div>
    )
}

export default Header
