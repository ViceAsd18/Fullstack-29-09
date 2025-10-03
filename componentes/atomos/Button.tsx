import { Button } from "antd"
import { Link } from "react-router"


interface ButtonHeaderProps {
  texto: string;
  to : string;
}

const ButtonHeader : React.FC<ButtonHeaderProps> = ({ texto, to}) => {
    return (
        <Link to={to}>
            <Button style={{
                color : 'black'
            }} 
            type="link">{texto}</Button>
        </Link>
    )
}   



export default ButtonHeader;