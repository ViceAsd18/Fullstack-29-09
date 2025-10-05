import React from "react"

import TextBanner from "components/molecules/MainBanner/TextBanner"
import ContainerButton from "components/molecules/MainBanner/ContainerButton"

const bannerStyle = {
    borderRadius: 8,
    margin: 80,
    marginLeft: 80,
    marginRight: 80,
    backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/imagenes/bg_main_card.png')",
    backgroundSize: "100% auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center" as const,
    padding: "100px 20px",
};


const MainBanner = () => {
    return (
        <div style={bannerStyle}>
            <TextBanner />
            <ContainerButton />
        </div>
    )
}

export default MainBanner