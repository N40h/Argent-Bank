import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditName from "../EditName/EditName";

export default function UserHeader() {
    const user = useSelector((state) => state.user)

    const [isEditingName, setIsEditingName] = useState(false);

    const handleClick = () => {
        setIsEditingName(!isEditingName)
    }

    const handleEdit = () => {
        setIsEditingName(false)
    }

    return (
        <div className="header">
            {!isEditingName && <h1>Welcome back<br />{user.firstName + " " + user.lastName + "!"}</h1> }
            {isEditingName
                ? (<EditName onCancel={handleClick} onSave={handleEdit} />)
                : (<button className="edit-button" onClick={handleClick}>Edit Name</button>)
            }
        </div>
    )
}