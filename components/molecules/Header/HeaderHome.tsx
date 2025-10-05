import React from "react";
import { Layout } from "antd";
import { Styles } from "components/molecules/Header/styles";
import Logo from "components/atoms/Header/Logo";
import NavBarLinks from "components/atoms/Header/NavBarLinks";
import ProfileButton from "components/atoms/Header/ProfileButton";

const { Header } = Layout;


const HeaderHome = () => {
    return (
        <Header style={Styles.headerStyle}>
            <Logo />
            <NavBarLinks />
            <ProfileButton />
        </Header>
    )
}

export default HeaderHome;