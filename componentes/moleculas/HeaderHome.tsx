import React from "react";

import ButtonHeader from "componentes/atomos/ButtonHeader";
import LogoHeader from "componentes/atomos/LogoHeader";

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
                <ButtonHeader texto="Browse"/>
                <ButtonHeader texto="My Learning"/>
                <ButtonHeader texto="Wishlist"/>
            </div>

            <div style={{
                display : 'flex',
                gap : '5px'

            }}>
                <ButtonHeader texto="Log in"/>
                <LogoHeader/>
            </div>



        </>        


    )

}   

export default HeaderHome;
