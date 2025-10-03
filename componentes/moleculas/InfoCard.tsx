import TituloCard from "componentes/atomos/TituloCard"
import TextoCard from "componentes/atomos/TextoCard"
import ImagenCard from "componentes/atomos/ImagenCard"

interface InfoCardProps {
    Titulo : string
    Texto : string
    SrcImg : string
}

const InfoCard : React.FC<InfoCardProps> = ({Titulo,Texto,SrcImg}) => {
    return (
        <div className="card" style={{
        }}>
            <div className="card-img">
                <ImagenCard src={SrcImg}/>
            </div>
            <div className="card-body" style={{
                margin : '20px'
            }}>
                <TituloCard Titulo={Titulo}/>
                <TextoCard Texto={Texto}/>
            </div>
        </div>


    )
}

export default InfoCard