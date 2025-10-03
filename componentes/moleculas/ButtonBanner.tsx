import UIButton from "componentes/atomos/ButtonBanner"

const ButtonBanner = () => {
    return (
        <div style={{
            display : 'flex',
            justifyContent : 'center',
            gap : '20px',
            margin : '60px'
        }}>
            <UIButton variant="primary" to="#cursos">Explore Courses</UIButton>
            <UIButton variant="white" to="/login">Sign Up</UIButton>
        </div>

    )   
}

export default ButtonBanner