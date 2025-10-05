import React from "react"

import { Button } from "antd"
import { Avatar } from "antd"

const ProfileButton = () => {
    return (
        <div style={{flexDirection : "row", alignItems : "center"}}>
            <Button type="text" color="default">
                <span style={{fontWeight : "600"}}>Log in</span>
                <Avatar src="assets/imagenes/profile_icon.png"/>
            </Button>
        </div>
    )
}

export default ProfileButton