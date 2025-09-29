
import { Button } from "antd"


interface ButtonHeaderProps {
  texto: string;
}

const ButtonHeader : React.FC<ButtonHeaderProps> = ({ texto }) => {
    return (
        <Button type="link" style={{
            color : 'black',
            textDecoration : 'none'
        }}>
            {texto}
        </Button>
    )
}



export default ButtonHeader;