import { Button } from "antd";

interface TypeButtonProps {
    text : string;
    blue? : boolean;
}

const TypeButton = ({text, blue = false} : TypeButtonProps) => {
    return (
       <>
        {blue ? 
            <Button type="primary" size="large" style={{marginRight : "12px", padding : "0 20px"}}>
                {text}
            </Button> :
            <Button size="large" style={{fontWeight : "500"}}>{text}</Button>
        }
       </> 
    )
}

export default  TypeButton