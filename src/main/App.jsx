import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default (props) => {
    return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center bg-primary">
            <div className="bg-body h-75 w-75 rounded">
                <NavBar />
                <div className="m-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
