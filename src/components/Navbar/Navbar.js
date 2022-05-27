import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="container-navbar">
            <ArrowBackIosIcon className="icon-back"/>
            <h1>Verificacion</h1>
        </div>
        )
}