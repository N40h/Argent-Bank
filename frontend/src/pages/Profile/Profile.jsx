import React, { useEffect } from "react"
import UserHeader from "../../components/UserHeader/UserHeader"
import Account from "../../components/Account/Account"
import { useDispatch, useSelector } from "react-redux"
import { profileUser } from "../../redux/services/api";

export default function Profile() {
    document.title = "Argent Bank - Profile"

    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profileUser(token))
    }, [dispatch, token])

    return (
        <main className="main bg-dark">
            <UserHeader />
            <h2 className="sr-only">Accounts</h2>
            <Account
                title="x8349"
                amount="2,082.79"
                description="Available Balance"
            />
            <Account
                title="x6712"
                amount="10,928.42"
                description="Available Balance"
            />
            <Account
                title="x8349"
                amount="184.30"
                description="Current Balance"
            />
        </main>
    )
}