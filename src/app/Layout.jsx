import React from "react";
import { Link, Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";

const Layout = () => {
    return (
        <div>
            <AuthStatus />

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/messages">Messages</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}

export default Layout;
