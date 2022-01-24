import React from "react";
import useAuth from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AuthStatus = () => {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <p>
            Welcome {auth.user}!{" "}
            <button
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
            </button>
        </p>
    );
}

export default AuthStatus;
