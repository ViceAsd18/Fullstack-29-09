interface TituloCardProps {
    Titulo : string
}

const TituloCard : React.FC<TituloCardProps> = ({Titulo}) => {
    return (
        <strong style={{
            fontSize : '20px'
        }}>{Titulo}</strong>
    )
}

export default TituloCard