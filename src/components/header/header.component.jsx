import React from "react";
export default function Header(){
    return(
        <div className="header">
            <h1 className="header__title">TODO</h1>
            <img src="../../assets/icon-moon.svg" alt="toggle" className="header__mode-toggle" />
        </div>
    )
}