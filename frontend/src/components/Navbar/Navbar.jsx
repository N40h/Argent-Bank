import React from "react";
import { Link } from "react-router-dom";
import ArgentBankLogo from "../../assets/argentBankLogo.png"
import { useSelector, useDispatch } from "react-redux";
import { setLogOut } from "../../redux/reducers/authSlice";
import { resetUserProfile } from "../../redux/reducers/userSlice";

export default function Navbar() {    
    const token = useSelector((state) => state.auth.token)
    const userName = useSelector((state) => state.user.userName)

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setLogOut());
        dispatch(resetUserProfile());
        sessionStorage.clear();
    }

    if (token) {
        return (
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link to="/profile" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>{userName}
                    </Link>
                    <Link to="/" className="main-nav-item" onClick={handleClick}>
                        <i className="fa fa-sign-out"></i>Sign Out
                    </Link>
                </div>
            </nav>
        )
    }

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>Sign In
                </Link>
            </div>
        </nav>
    )
}