import AvatarNav from 'assets/profile_icon.png'

const LogoHeader = () => {
    return (
            <img src={AvatarNav} alt="Avatar del nav"
            style={{
                width : '25px',
                height : '25px',
                borderRadius : '100px'  
            }}
            />
    )
}

export default LogoHeader;