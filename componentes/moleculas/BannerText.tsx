import Titulo from "componentes/atomos/Titulo"
import ParrafoBanner from "componentes/atomos/Parrafo"

interface ButtonProps {
  texto: string;
  parrafo : string;
}

const BannerText : React.FC<ButtonProps> = ({texto,parrafo}) => {
    return (
        <div style={{
            marginTop : '50px'
        }}>
            <Titulo texto={texto} />
            <ParrafoBanner texto={parrafo}/>
        </div>

    )
}

export default BannerText