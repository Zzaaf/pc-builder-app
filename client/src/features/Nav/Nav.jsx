import React from 'react';
import {Link, useNavigate, useLocation  } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()

    const location = useLocation();
    const data = location.state?.url;

    console.log(data);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h1 className="navbar-brand">PC Builder App</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/' className="nav-link active">Home</Link>
                    <Link to='/profile' className="nav-link active">Profile</Link>
                    <button onClick={() => navigate('/profile', {state: {url:'/history'}})}>Test</button>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;