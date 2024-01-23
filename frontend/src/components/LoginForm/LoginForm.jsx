import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/services/api";

export default function SignInForm() {
    const token = useSelector((state) => state.auth.token)
    const [formData, setFormData] = useState({ email: '', password: '', remember: false });
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorFields, setErrorFields] = useState({ email: false, password: false })
    
    const { email, password, remember } = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: type === 'checkbox' ? checked : value }));
        setErrorFields((prevErrorFields) => ({ ...prevErrorFields, [name]: false }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { success } = await dispatch(loginUser(email, password));
        
        if (success) {
            navigate("/profile");
        } else {
            setErrorMessage("Incorrect username or password. Please try again.");
            setErrorFields({ email: true, password: true });
        }
    }

    if (remember) {
        sessionStorage.setItem('token', token)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="email" onChange={handleChange} value={formData.email} className={errorFields.email ? 'error' : ''} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={formData.password} className={errorFields.password ? 'error' : ''} />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="input-remember">
                <input type="checkbox" id="remember-me" name="remember" onChange={handleChange} checked={formData.remember} />
                <label htmlFor="remember">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">Sign In</button>
        </form>
    )
}