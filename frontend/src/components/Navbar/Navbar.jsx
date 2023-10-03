import React from "react";
import { Link } from "react-router-dom";
import ArgentBankLogo from "../../assets/argentBankLogo.png"

export default function Navbar() {    
    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="/sign-in" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>Sign In
                </Link>
                {/* <Link to="/user" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>Tony
                </Link>
                <Link to="/" className="main-nav-item">
                    <i className="fa fa-sign-out"></i>Sign Out
                </Link> */}
            </div>
        </nav>
    )
}