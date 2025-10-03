interface TextoCardProps {
    Texto : string
}

const TextoCard : React.FC<TextoCardProps> = ({Texto}) => {
    return (
        <p>{Texto}</p>
    )
}

export default TextoCard