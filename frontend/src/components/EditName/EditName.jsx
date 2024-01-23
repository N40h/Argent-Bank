import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from '../../redux/services/api'
import { editUserProfile } from '../../redux/reducers/userSlice'

export default function EditName({ onCancel, onSave }) {
    const token = useSelector((state) => state.auth.token)
    const firstName = useSelector((state) => state.user.firstName)
    const lastName = useSelector((state) => state.user.lastName)
    const userName = useSelector((state) => state.user.userName)

    const [newUserName, setNewUserName] = useState(userName)

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const newValue = event.target.value
        setNewUserName(newValue)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { success } = await dispatch(editUser(token, newUserName))

        if (success) {
            dispatch(editUserProfile(newUserName));
            onSave();
        }        
    }

    const handleCancel = () => {
        setNewUserName(userName);
        onCancel();
    }

    return (
        <section className='edit-name-content'>
            <h1>Edit user info</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="userName">User Name:</label>
                    <input type="text" id="userName" name="userName" value={newUserName} onChange={handleChange}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" placeholder={firstName} disabled/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" placeholder={lastName} disabled/>
                </div>
                <button className="edit-button" type="submit">Save</button>
                <button className="edit-button" type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </section>
    )
}