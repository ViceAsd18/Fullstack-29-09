import React from "react";

import ButtonHeader from "componentes/atomos/Button";
import LogoHeader from "componentes/atomos/LogoHeader";

import { NavLink } from "react-router";

function HeaderHome (){
    return (
        <>
            <div>
                <h2 style={{fontSize : '20px'}}>EduStream</h2>
            </div>

            <div style={{
                display : 'flex',
                gap : '15px',
            }}>
                <ButtonHeader texto="Browse" to="/browse"/>
                <ButtonHeader texto="My Learning" to="/my-learning"/>
                <ButtonHeader texto="Wishlist" to="/wishlist"/>
            </div>

            <div style={{
                display : 'flex',
                gap : '5px',
                alignItems : 'center'
            }}>
                <ButtonHeader texto="Log in" to="/login"/>
                <LogoHeader/>
            </div>



        </>        


    )

}   

export default HeaderHome;
