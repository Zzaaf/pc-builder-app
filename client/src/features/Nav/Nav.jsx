import {Link } from 'react-router-dom'

function Nav() {
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
                    <Link to='/products' className="nav-link active">Products</Link>
                    <Link to='/profile' className="nav-link active">Profile</Link>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;